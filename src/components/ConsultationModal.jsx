import { createContext, useContext, useEffect, useRef, useState } from 'react';
import ConsultationForm from './ConsultationForm';

const ConsultationContext = createContext(null);

// On pages without the provider (or without dialog support), keep the contact-page link.
export function ConsultationLink({ children, className }) {
  const open = useContext(ConsultationContext);
  return <a href="/contact#consultation" className={className} aria-haspopup={open ? 'dialog' : undefined} onClick={event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (open?.(event.currentTarget)) event.preventDefault();
  }}>{children}</a>;
}

export default function ConsultationModalProvider({ children }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const title = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function open(element) {
    if (typeof dialog.current?.showModal !== 'function') return false;
    trigger.current = element;
    dialog.current.showModal();
    setIsOpen(true);
    title.current?.focus();
    return true;
  }
  function close() {
    if (!busy) dialog.current?.close();
  }
  return <ConsultationContext.Provider value={open}>
    {children}
    <dialog ref={dialog} className="consultation-modal" aria-labelledby="consultation-modal-title" aria-describedby="consultation-modal-description" onCancel={event => {
      if (busy) event.preventDefault();
    }} onClose={() => {
      setIsOpen(false);
      trigger.current?.focus();
    }} onClick={event => {
      if (event.target !== dialog.current) return;
      const rect = dialog.current.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    }}>
      <header className="consultation-modal-header">
        <div>
          <h2 id="consultation-modal-title" ref={title} tabIndex={-1}>Let’s plan your project.</h2>
          <p id="consultation-modal-description">Free consultation. No obligation.</p>
        </div>
        <button type="button" className="consultation-modal-close" onClick={close} disabled={busy} aria-label="Close consultation form">×</button>
      </header>
      <div className="contact-form-2 consultation-modal-body">
        <div className="data"><ConsultationForm onBusyChange={setBusy} /></div>
      </div>
    </dialog>
  </ConsultationContext.Provider>;
}
