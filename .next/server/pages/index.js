"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About3)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about-3.json
const about_3_namespaceObject = JSON.parse('{"TN":"Hundreds of Projects, One Standard: Excellence.","WL":"From full-scale project management to home transformations, fencing, and roofing, we’ve stood by families with quality craftsmanship and care. Whatever the job, we make it personal—and we get it done right.","ev":[{"image":"https://plus.unsplash.com/premium_photo-1682361002200-be11404af6dc?q=80&w=840&h=1180","title":"Home Improvement","text":"Looking to remodel? We help turn your ideas into beautiful, functional spaces—crafted with care and built to last.","link":"/services/home-improvement"},{"image":"https://plus.unsplash.com/premium_photo-1682361002200-be11404af6dc?q=80&w=840&h=1180","title":"Fencing","text":"Whether you want privacy, security, or curb appeal, our fences are built to fit your needs and style.","link":"/services/fencing"},{"image":"https://plus.unsplash.com/premium_photo-1682361002200-be11404af6dc?q=80&w=840&h=1180","title":"Roofing","text":"Protect your home with expert roof installations and repairs—backed by trusted materials and lasting workmanship.","link":"/services/roofing"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/About3.jsx



const About3Section = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "gap history-style-one",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "heading heading-style-3",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/img/image2vector-3.svg",
                            alt: "heading-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        dangerouslySetInnerHTML: {
                            __html: about_3_namespaceObject.TN
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: about_3_namespaceObject.WL
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: about_3_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4 col-md-6 col-sm-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "history-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "w-100",
                                            src: item.image,
                                            alt: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "details",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: item.text
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: item.link,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fa-solid fa-arrow-up-long"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, `about3-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const About3 = (About3Section);


/***/ }),

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContactForm)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/contact-form.json
const contact_form_namespaceObject = JSON.parse('{"Oc":"GET IN TOUCH","TN":"Quality & Passion With Contact Form","ev":[{"title":"Occupational Health Risk Management?","text":"Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased."},{"title":"What is commercial in construction?","text":"Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased."},{"title":"Start a construction management?","text":"Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased."},{"title":"Measure quality in construction projects?","text":"Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased."},{"title":"Prepare a construction project schedule?","text":"Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased."}]}');
// EXTERNAL MODULE: external "react-bootstrap/Accordion"
var Accordion_ = __webpack_require__(2423);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
;// CONCATENATED MODULE: ./src/components/sections/ContactForm.jsx





const ContactFormSection = ()=>{
    const styles = {
        parallax: {
            backgroundImage: "url(/images/pattren.png)"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "contact-form-one",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "heading",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/img/image2vector-3.svg",
                            alt: "heading-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: contact_form_namespaceObject.Oc
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: contact_form_namespaceObject.TN
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "acc2",
                                children: /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()), {
                                    defaultActiveKey: "contact-acc-0",
                                    alwaysOpen: true,
                                    children: contact_form_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((Accordion_default()).Item, {
                                            eventKey: `contact-acc-${key}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()).Header, {
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()).Body, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: item.text
                                                    })
                                                })
                                            ]
                                        }, `contact-item-${key}`))
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "c-form-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "parallax",
                                        style: styles.parallax
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Formik, {
                                        initialValues: {
                                            email: "",
                                            name: "",
                                            subject: "",
                                            message: "",
                                            phone: ""
                                        },
                                        validate: (values)=>{
                                            const errors = {};
                                            if (!values.email) {
                                                errors.email = "Required";
                                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                                errors.email = "Invalid email address";
                                            }
                                            return errors;
                                        },
                                        onSubmit: (values, { setSubmitting  })=>{
                                            const form = document.getElementById("contactForm");
                                            const status = document.getElementById("contactFormStatus");
                                            const data = new FormData();
                                            data.append("name", values.name);
                                            data.append("subject", values.subject);
                                            data.append("email", values.email);
                                            data.append("phone", values.phone);
                                            data.append("message", values.message);
                                            fetch(form.action, {
                                                method: "POST",
                                                body: data,
                                                headers: {
                                                    Accept: "application/json"
                                                }
                                            }).then((response)=>{
                                                if (response.ok) {
                                                    status.innerHTML = "Thanks for your submission!";
                                                    form.reset();
                                                } else {
                                                    response.json().then((data)=>{
                                                        if (Object.hasOwn(data, "errors")) {
                                                            status.innerHTML = data["errors"].map((error)=>error["message"]).join(", ");
                                                        } else {
                                                            status.innerHTML = "Oops! There was a problem submitting your form";
                                                        }
                                                    });
                                                }
                                            }).catch((error)=>{
                                                status.innerHTML = "Oops! There was a problem submitting your form";
                                            });
                                            setSubmitting(false);
                                        },
                                        children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                onSubmit: handleSubmit,
                                                id: "contactForm",
                                                action: app/* settings.formspreeURL */.Xd.Tb,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "row g-0",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "exampleInputText1",
                                                            placeholder: "Complete Name",
                                                            name: "name",
                                                            required: "required",
                                                            onChange: handleChange,
                                                            onBlur: handleBlur,
                                                            value: values.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "row g-0",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "email",
                                                            className: "form-control",
                                                            id: "exampleInputEmail1",
                                                            placeholder: "Email Address",
                                                            name: "email",
                                                            required: "required",
                                                            onChange: handleChange,
                                                            onBlur: handleBlur,
                                                            value: values.email
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "row g-0",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "tel",
                                                            className: "form-control",
                                                            id: "exampleInputPassword1",
                                                            placeholder: "Phone No",
                                                            name: "phone",
                                                            onChange: handleChange,
                                                            onBlur: handleBlur,
                                                            value: values.phone
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "row g-0",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "select-wrapper",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                id: "inputState-111",
                                                                className: "form-control",
                                                                name: "subject",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.subject,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                        children: "Subject"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                        value: "1",
                                                                        children: "Subject 1"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                        value: "2",
                                                                        children: "Subject 2"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                        value: "3",
                                                                        children: "Subject 3"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "row g-0",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                            placeholder: "Question / Message?",
                                                            name: "message",
                                                            onChange: handleChange,
                                                            onBlur: handleBlur,
                                                            value: values.message
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                        type: "submit",
                                                        className: "theme-btn",
                                                        children: [
                                                            "Submit Now",
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa-solid fa-angles-right"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "form-status",
                                                        id: "contactFormStatus"
                                                    })
                                                ]
                                            })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const ContactForm = (ContactFormSection);


/***/ }),

/***/ 5063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hero3)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/hero-3.json
const hero_3_namespaceObject = JSON.parse('{"TN":"A healthy home begins with a firm foundation.","WL":"At Chief Stone Constructions, we don’t just work with materials—we work with people. Whether it’s home improvement, fencing, or roofing, our approachable team and hands-on leadership are here to deliver real solutions that last.","Rk":{"HQ":"https://media.istockphoto.com/id/1472892575/video/aerial-view-of-fence-being-built-by-two-workers-in-a-suburban-backyard.mp4?s=mp4-640x640-is&k=20&c=wkNh6c6ozjswhbNIPB53K0DXMLyJAi3U0Kke4lzxdao=","CL":"/img/f-3.jpg","wp":"Construction video showcasing our work"},"um":"Every call answered, every project followed through—because to us, showing up matters just as much as building strong."}');
;// CONCATENATED MODULE: ./src/components/sections/Hero3.jsx


const Hero3Section = ()=>{
    const styles = {
        parallax: {
            "backgroundImage": "url(/images/pattren-2.png)"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "featured-section-three",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "parallax",
                style: styles.parallax
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row space align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "data",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        children: hero_3_namespaceObject.TN
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "data space",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: hero_3_namespaceObject.WL
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "image",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("video", {
                                        autoPlay: true,
                                        muted: true,
                                        loop: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                                src: hero_3_namespaceObject.Rk.HQ,
                                                type: "video/mp4"
                                            }),
                                            "Your browser does not support the video tag."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("figure", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: hero_3_namespaceObject.Rk.CL,
                                                alt: hero_3_namespaceObject.Rk.wp
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("figcaption", {})
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "info",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                dangerouslySetInnerHTML: {
                                    __html: hero_3_namespaceObject.um
                                }
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Hero3 = (Hero3Section);


/***/ }),

/***/ 7498:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/latest-posts-2.json
const latest_posts_2_namespaceObject = {};
// EXTERNAL MODULE: ./src/lib/date.js
var date = __webpack_require__(3265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/sections/LatestPosts2.jsx




const LatestPosts2Section = ({ posts  })=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "gap blog-style-three",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "blog-heading",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    children: Data.subtitle
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    children: Data.title
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: Data.description
                                }),
                                /*#__PURE__*/ _jsxs(Link, {
                                    href: Data.button.link,
                                    className: "theme-btn",
                                    children: [
                                        Data.button.label,
                                        /*#__PURE__*/ _jsx("i", {
                                            className: "fa-solid fa-angles-right"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "blog-posts row",
                            children: posts.slice(0, Data.numOfItems).map((item, key)=>/*#__PURE__*/ _jsx("div", {
                                    className: "col-lg-6 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "boxx",
                                        children: [
                                            /*#__PURE__*/ _jsx("figure", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: item.image,
                                                    alt: item.title
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "space",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "date",
                                                        children: /*#__PURE__*/ _jsx(Date, {
                                                            dateString: item.date
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        children: /*#__PURE__*/ _jsx(Link, {
                                                            href: `/blog/${item.id}`,
                                                            children: item.title
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, `latest-post2-item-${key}`))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const LatestPosts2 = ((/* unused pure expression or super */ null && (LatestPosts2Section)));


/***/ }),

/***/ 1106:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/locations.json
const locations_namespaceObject = {};
// EXTERNAL MODULE: external "react-bootstrap/Tab"
var Tab_ = __webpack_require__(9025);
;// CONCATENATED MODULE: external "react-bootstrap/Tabs"
const Tabs_namespaceObject = require("react-bootstrap/Tabs");
;// CONCATENATED MODULE: ./src/components/sections/Locations.jsx




const LocationsSection = ()=>{
    const styles = {
        parallax: {
            "backgroundImage": "url(/images/pattren-6.png)"
        }
    };
    return /*#__PURE__*/ _jsxs("section", {
        className: "gap where-we-work",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "parallax",
                style: styles.parallax
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-lg-6",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "heading-style-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "row align-items-center",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "col-lg-12",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "data",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        children: Data.subtitle
                                                    }),
                                                    /*#__PURE__*/ _jsx("h2", {
                                                        children: Data.title
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "first",
                                    children: /*#__PURE__*/ _jsx(Tabs, {
                                        defaultActiveKey: "tab-country-0",
                                        id: "locationsTabContent",
                                        className: "tab-content",
                                        children: Data.countries.map((country, country_key)=>/*#__PURE__*/ _jsx(Tab, {
                                                eventKey: `tab-country-${country_key}`,
                                                title: country.name,
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "tab-data",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("figure", {
                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                src: country.map.url,
                                                                alt: country.map.alt
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("ul", {
                                                            children: country.locations.map((location, location_key)=>/*#__PURE__*/ _jsx("li", {
                                                                    className: location_key == 0 ? "map-pin active" : "map-pin",
                                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                                        className: "location",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("figure", {
                                                                                children: /*#__PURE__*/ _jsx("img", {
                                                                                    src: location.image,
                                                                                    alt: location.title
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "data",
                                                                                children: /*#__PURE__*/ _jsx("p", {
                                                                                    children: location.text
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }, `c${country_key}-location-item-${location_key}`))
                                                        })
                                                    ]
                                                })
                                            }, `countries-item-${country_key}`))
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "second",
                                children: [
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "des",
                                        children: Data.description
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "w-counter",
                                        children: /*#__PURE__*/ _jsx("ul", {
                                            children: Data.numbers.map((item, key)=>/*#__PURE__*/ _jsxs("li", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h2", {
                                                            children: item.value
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: item.label
                                                        })
                                                    ]
                                                }, `locations-numbers-item-${key}`))
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Locations = ((/* unused pure expression or super */ null && (LocationsSection)));


/***/ }),

/***/ 9267:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/owners.json
const owners_namespaceObject = {};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/sections/Owners.jsx



const OwnersSection = ()=>{
    return /*#__PURE__*/ _jsxs("section", {
        className: "gap no-top team-style-two",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "heading",
                children: [
                    /*#__PURE__*/ _jsx("figure", {
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "/images/heading-icon.png",
                            alt: "heading-icon"
                        })
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        children: Data.subtitle
                    }),
                    /*#__PURE__*/ _jsx("h2", {
                        children: Data.title
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: Data.items.map((item, key)=>/*#__PURE__*/ _jsx("div", {
                            className: "col-lg-12 col-md-6 col-sm-12",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "team-data",
                                children: [
                                    /*#__PURE__*/ _jsx("h3", {
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: item.link,
                                            children: item.name
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: item.role
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "contact",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                children: /*#__PURE__*/ _jsxs("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                    width: "40",
                                                    height: "62",
                                                    viewBox: "0 0 40 62",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("defs", {
                                                            children: /*#__PURE__*/ _jsx("clipPath", {
                                                                id: "sdfsdfsas",
                                                                children: /*#__PURE__*/ _jsx("rect", {
                                                                    width: "40",
                                                                    height: "62"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("g", {
                                                            id: "Mobsdsdffsdw3ile",
                                                            clipPath: "url(#sdfsdfsas)",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    id: "Path_1fghddddgsfdffs",
                                                                    "data-name": "Path 1",
                                                                    d: "M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z",
                                                                    transform: "translate(1 1)"
                                                                }),
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    id: "Path_24fsdfsd32r",
                                                                    "data-name": "Path 2",
                                                                    d: "M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z",
                                                                    transform: "translate(14 48)"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: item.tel
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "team-social-medias",
                                        children: [
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: item.link,
                                                children: /*#__PURE__*/ _jsx("i", {
                                                    className: "fa-solid fa-arrow-up-long"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "team-social-media",
                                                children: item.social.map((link, link_key)=>/*#__PURE__*/ _jsx("a", {
                                                        className: "icon",
                                                        href: link.link,
                                                        target: "_blank",
                                                        title: link.title,
                                                        children: /*#__PURE__*/ _jsx("i", {
                                                            className: link.icon
                                                        })
                                                    }, `ownerssocial-item-${link_key}`))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("figure", {
                                        className: "team-image",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: item.image,
                                            alt: item.name
                                        })
                                    })
                                ]
                            })
                        }, `owners-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const Owners = ((/* unused pure expression or super */ null && (OwnersSection)));


/***/ }),

/***/ 8955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4261);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
/* harmony import */ var _components_sections_Hero3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5063);
/* harmony import */ var _components_sections_About3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4597);
/* harmony import */ var _components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7741);
/* harmony import */ var _components_sections_Owners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9267);
/* harmony import */ var _components_sections_Locations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1106);
/* harmony import */ var _components_sections_ContactForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3530);
/* harmony import */ var _components_sections_LatestPosts2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7498);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ProductsSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Products"
        ]
    },
    ssr: false
});
const Projects2Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Projects2"
        ]
    },
    ssr: false
});
const Home3 = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Hero3__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_About3__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Projects2Slider, {
                    projects: props.projects
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_ContactForm__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home3);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getSortedProjectsData */ .ET)();
    return {
        props: {
            posts: allPosts,
            projects: allProjects
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ 9025:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tab");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,152,806,261,289,374,741], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();