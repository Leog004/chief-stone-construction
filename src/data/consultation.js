const choice = (id, label, options) => ({ id, label, options: [...options, 'Not sure — help me choose'] });
const size = (id, label, unit) => ({ id, label, unit, type: 'number' });
const services = [
  { id: 'kitchen', label: 'Kitchen remodeling', icon: 'fa-utensils', fields: [choice('scope', 'What would you like to change?', ['Full remodel', 'Cabinets and countertops', 'Layout changes', 'Small updates']), choice('cabinets', 'Cabinet preference', ['Keep / refinish existing', 'Stock cabinets', 'Semi-custom cabinets', 'Custom cabinetry']), choice('counters', 'Countertop preference', ['Laminate', 'Quartz', 'Granite', 'Natural stone']), size('area', 'Approximate kitchen floor area', 'sq ft')] },
  { id: 'bathroom', label: 'Bathroom remodeling', icon: 'fa-bath', fields: [choice('scope', 'What would you like to change?', ['Full remodel', 'Shower / tub replacement', 'Tub-to-shower conversion', 'Vanity and fixtures', 'Accessibility updates']), choice('finish', 'Shower / wall material', ['Tile', 'Natural stone', 'Prefabricated surround']), size('area', 'Approximate bathroom floor area', 'sq ft')] },
  { id: 'flooring', label: 'Flooring', icon: 'fa-border-all', fields: [choice('material', 'Preferred flooring', ['Luxury vinyl plank', 'Laminate', 'Hardwood', 'Tile', 'Carpet']), size('area', 'Approximate floor area', 'sq ft'), choice('removal', 'Existing flooring', ['Needs removal', 'Already removed', 'New construction']), choice('condition', 'Subfloor condition', ['Appears level and sound', 'Uneven / squeaking', 'Water damage or soft spots'])] },
  { id: 'paint', label: 'Painting, drywall & trim', icon: 'fa-paint-roller', fields: [choice('scope', 'Main type of work', ['Interior painting', 'Exterior painting', 'Drywall repair / installation', 'Trim / crown molding', 'Several of these']), choice('finish', 'Desired finish', ['Standard painted finish', 'Smooth drywall finish', 'Match existing texture', 'Detailed trim / millwork']), size('area', 'Approximate surface area to paint or finish', 'sq ft'), size('length', 'Approximate trim length, if applicable', 'linear ft')] },
  { id: 'fencing', label: 'Fencing & gates', icon: 'fa-grip-lines-vertical', fields: [choice('scope', 'Type of work', ['New fence', 'Replace existing fence', 'Fence repair', 'Gate only']), choice('material', 'Preferred material', ['Cedar', 'Pressure-treated wood', 'Chain link', 'Metal / ornamental', 'Vinyl / composite']), size('length', 'Approximate fence length', 'linear ft'), choice('height', 'Fence height', ['4 ft', '6 ft', '8 ft']), size('gates', 'Number of gates', 'gates')] },
  { id: 'concrete', label: 'Concrete & masonry', icon: 'fa-trowel-bricks', fields: [choice('scope', 'What are you planning?', ['Driveway', 'Patio / slab', 'Walkway', 'Masonry / brick repair', 'Fireplace']), size('area', 'Approximate project area', 'sq ft'), choice('finish', 'Preferred finish', ['Standard broom finish', 'Smooth finish', 'Stamped / decorative', 'Brick / stone']), choice('removal', 'Does existing material need removal?', ['Yes', 'No'])] },
  { id: 'outdoor', label: 'Patios, decks & pergolas', icon: 'fa-tree', fields: [choice('scope', 'What would you like to build?', ['Covered patio', 'Pergola', 'Deck', 'Outdoor living area']), choice('material', 'Preferred structure / deck material', ['Cedar', 'Pressure-treated wood', 'Composite decking', 'Metal']), size('area', 'Approximate footprint', 'sq ft'), choice('utilities', 'Utilities needed', ['None planned', 'Lighting / outlets', 'Gas / outdoor kitchen', 'Multiple utilities'])] },
  { id: 'roofing', label: 'Roofing & siding', icon: 'fa-house', fields: [choice('scope', 'Main concern', ['Roof repair / leak', 'Roof replacement', 'Siding repair', 'Siding replacement', 'Storm damage']), choice('material', 'Current or preferred material', ['Asphalt shingles', 'Metal roofing', 'Composite / slate roofing', 'Fiber cement siding', 'Wood / panel siding', 'Vinyl siding']), size('area', 'Approximate roof or siding surface area', 'sq ft'), choice('leak', 'Is there an active leak?', ['Yes', 'No'])] },
  { id: 'commercial', label: 'Commercial build-outs', icon: 'fa-building', fields: [choice('use', 'Type of space', ['Restaurant / commercial kitchen', 'Retail', 'Office', 'Other commercial space']), size('area', 'Approximate space size', 'sq ft'), choice('scope', 'Project scope', ['Full build-out', 'Refresh / renovation', 'Kitchen / service area', 'Repairs / improvements']), choice('plans', 'Plans and approvals', ['No plans yet', 'Plans in progress', 'Plans ready for review', 'Permits already issued'])] },
  { id: 'remodel', label: 'Additions & whole-home projects', icon: 'fa-house-chimney', fields: [choice('scope', 'Project type', ['Room addition', 'Whole-home remodel', 'Garage conversion', 'Detached garage / shop', 'Multiple-room renovation']), size('area', 'Approximate project area', 'sq ft'), choice('plans', 'Design stage', ['Ideas only', 'Drawings in progress', 'Plans ready']), choice('occupied', 'Will the property be occupied?', ['Yes', 'No', 'Part of the time'])] },
  { id: 'repairs', label: 'Repairs, doors & windows', icon: 'fa-screwdriver-wrench', fields: [choice('scope', 'Main repair', ['Doors', 'Windows', 'Water damage', 'General repairs', 'Several small projects']), size('count', 'Number of doors, windows or repair areas', 'items'), choice('material', 'Door / window material, if applicable', ['Wood', 'Fiberglass', 'Steel', 'Vinyl', 'Aluminum'])] },
  { id: 'other', label: 'Something else / help me plan', icon: 'fa-comments', fields: [choice('scope', 'Where do you need help?', ['Choosing the right improvements', 'Planning several projects', 'A project not listed here'])] },
];
const finishes = ['Budget-friendly essentials', 'Balanced quality and cost', 'Premium finishes', 'Luxury / fully custom details', 'Help me compare options'];
const priorities = ['Lowest practical cost', 'Long-term durability', 'Design and fine details', 'Fastest practical completion', 'Help me decide'];
const timelines = ['As soon as possible', 'Within 1–3 months', 'Within 3–6 months', '6+ months / flexible', 'Just budgeting / exploring'];
const budgets = ['Under $2,500', '$2,500–$5,000', '$5,000–$15,000', '$15,000–$30,000', '$30,000–$75,000', '$75,000–$150,000', '$150,000+', 'Help me establish a budget'];
const initialValues = () => ({ services: [], details: {}, notes: '', finish: '', priority: '', timeline: '', budget: '', deadline: '', name: '', zip: '', email: '', phone: '', contact: 'Email', property: '', website: '' });
function validateStep(step, values) {
  const errors = {};
  if (step === 0 && !values.services.length) errors.services = 'Choose at least one service.';
  if (step === 1) services.filter(s => values.services.includes(s.id)).forEach(s => s.fields.forEach(f => {
    const value = values.details[s.id]?.[f.id];
    if (f.type === 'number' && value && (!Number.isFinite(Number(value)) || Number(value) <= 0 || (['gates', 'items'].includes(f.unit) && !Number.isInteger(Number(value))))) errors[`${s.id}-${f.id}`] = 'Enter a positive measurement or leave this blank.';
  }));
  if (step === 3) {
    if (!['Email', 'Phone call'].includes(values.contact)) errors.contact = 'Choose email or phone call.';
    if (!values.name.trim()) errors.name = 'Enter your name.';
    if (!/^\d{5}$/.test(values.zip.trim())) errors.zip = 'Enter a five-digit project ZIP code.';
    if ((values.contact === 'Email' || values.email.trim()) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.';
    const digits = values.phone.replace(/\D/g, '');
    if ((values.contact === 'Phone call' || values.phone.trim()) && !(digits.length === 10 || (digits.length === 11 && digits[0] === '1'))) errors.phone = 'Enter a valid US phone number.';
  }
  return errors;
}
function projectSummary(values) {
  const lines = [];
  services.filter(s => values.services.includes(s.id)).forEach(s => {
    lines.push(s.label);
    s.fields.forEach(f => { const v = values.details[s.id]?.[f.id]; if (v) lines.push(`  ${f.label}: ${v}${f.unit ? ` ${f.unit}` : ''}`); });
  });
  [['Finish level', values.finish], ['Main priority', values.priority], ['Timing', values.timeline], ['Target date (not guaranteed)', values.timeline && values.timeline !== 'Just budgeting / exploring' ? values.deadline : ''], ['Total project budget', values.budget], ['Property type', values.property], ['Project ZIP', values.zip], ['Preferred contact', values.contact], ['Additional details', values.notes]].forEach(([label, value]) => { if (value) lines.push(`${label}: ${value}`); });
  return lines.join('\n');
}
function leadPayload(values) {
  return { name: values.name.trim(), email: values.email.trim(), phone: values.phone.trim(), subject: `Free consultation: ${services.filter(s => values.services.includes(s.id)).map(s => s.label).join(', ')}`, message: projectSummary(values), _gotcha: values.website };
}
module.exports = { services, finishes, priorities, timelines, budgets, initialValues, validateStep, projectSummary, leadPayload };
