import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, y as onMount, z as onDestroy, g as goto, A as globals, e as element, b as claim_element, f as children, j as detach_dev, m as attr_dev, n as add_location, B as toggle_class, o as insert_dev, p as append_dev, C as listen_dev, r as noop, D as binding_callbacks, E as createEventDispatcher, c as create_component, l as claim_component, q as mount_component, u as transition_in, w as transition_out, x as destroy_component, a as space, t as text, k as claim_space, h as claim_text, F as set_input_value, G as group_outros, H as check_outros, I as run_all } from './client.38861ca2.js';

var config = {
    jawg: {
        acccess_token: "4cKtE4Rze1HrvxWa9a7mdolSk10lVThTFC8zadQYMIMxTjkpTeIDJAAmhReDGnCH"
    },
    mapbox: {
        apikey: "pk.eyJ1IjoiZnBhc3Nhbml0aSIsImEiOiIxNTg3MGRlZWQyNjVkZjExMGVlNWVjNDFjOWQyNzNiMiJ9.pYKDlO4v-SNiDz08G9ZZoQ",
        init: { /* default map location (center of the map, and zoom level) */
            zoom: 12,
            center: [2.347457,48.857627]
        },
        style: "https://api.jawg.io/styles/jawg-light.json?access-token=4cKtE4Rze1HrvxWa9a7mdolSk10lVThTFC8zadQYMIMxTjkpTeIDJAAmhReDGnCH",
        geocoder: { /* Narrow search results to the defined boundingbox to avoid to many noises */
            searchbbox: [2.108065, 50.896051, 2.608629, 51.132778],
            placeholder: "Chercher une adresse"
        },
    },
    store: {
        unique_ids: ['nom_de_la_societe', 'adresse_du_point_de_vente']
    },
    data: {
        baseurl: "https://fpassaniti.opendatasoft.com/api/v2/catalog/datasets/les-arbres/exports/geojson",
        query: "?select=*&where=%22PARIS+12E+ARRDT%22&rows=49999",
        clustering: false,
        categories: {
            "default": // mandatory, keep a default icon
                {
                    "slug": "default",
                    "color":
                        "#f5f5f5"
                },
            "Traiteur - restauration à emporter":
                {
                    "slug": "traiteur",
                    "color":
                        "#FDD98B"
                }
            ,
            "Primeur - fruits et légumes":
                {
                    "slug": "primeur",
                    "color":
                        "#1EA81A"
                }
            ,
            "Poissonnerie":
                {
                    "slug": "poissonnerie",
                    "color":
                        "#86B1FC"
                }
            ,
            "Livraisons":
                {
                    "slug": "truck",
                    "color":
                        "#364852"
                }
            ,
            "Boucherie - charcuterie":
                {
                    "slug": "boucherie_charcuterie",
                    "color":
                        "#CB3019"
                }
            ,
            "Crèmerie - fromagerie":
                {
                    "slug": "fromagerie",
                    "color":
                        "#FDDB00"
                }
            ,
            "Vins - bières - spiritueux":
                {
                    "slug": "vin",
                    "color":
                        "#F90126"
                }
            ,
            "Boulangerie - pâtisserie":
                {
                    "slug": "boulangerie_patisserie",
                    "color":
                        "#E2A76F"
                }
            ,
            "Drive":
                {
                    "slug": "truck",
                    "color":
                        "#364852"
                }
            ,
            "Épicerie":
                {
                    "slug": "epicerie",
                    "color":
                        "#FDD98B"
                }
            ,
            "Alimentation générale":
                {
                    "slug": "alimentation_generale",
                    "color":
                        "#E06000"
                }
            ,
            "Supermarché ou hypermarché":
                {
                    "slug": "supermarche",
                    "color":
                        "#364852"
                }
        }
    }
};

/* src/components/Geolocator.svelte generated by Svelte v3.30.1 */

const { console: console_1 } = globals;
const file = "src/components/Geolocator.svelte";

function create_fragment(ctx) {
	let button;
	let img;
	let img_src_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			img = claim_element(button_nodes, "IMG", { src: true, class: true });
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "/location.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-u9cz5x");
			add_location(img, file, 40, 2, 890);
			attr_dev(button, "class", "button is-dark svelte-u9cz5x");
			toggle_class(button, "spin", /*searching*/ ctx[2]);
			add_location(button, file, 34, 0, 778);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, img);
			/*button_binding*/ ctx[3](button);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*getPosition*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*searching*/ 4) {
				toggle_class(button, "spin", /*searching*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			/*button_binding*/ ctx[3](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Geolocator", slots, []);
	let cleaner = /([+-]?\d+[.]?\d{0,6})\d*/;
	let geolocator;
	let searching = false;

	const setGeo = p => {
		$$invalidate(2, searching = false);
		const url = new URL(window.location);
		let lat = cleaner.exec(p.coords.latitude)[1];
		let long = cleaner.exec(p.coords.longitude)[1];
		url.searchParams.set("coords", long + "," + lat);
		goto(url);
	};

	const settings = {
		enableHighAccuracy: true,
		timeout: 10000,
		maximumAge: Infinity
	};

	const getPosition = () => {
		if (!navigator || !navigator.geolocation) {
			return;
		}

		$$invalidate(2, searching = true);
		navigator.geolocation.getCurrentPosition(setGeo, console.error, settings);
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Geolocator> was created with unknown prop '${key}'`);
	});

	function button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			geolocator = $$value;
			$$invalidate(1, geolocator);
		});
	}

	$$self.$capture_state = () => ({
		onMount,
		onDestroy,
		goto,
		cleaner,
		geolocator,
		searching,
		setGeo,
		settings,
		getPosition
	});

	$$self.$inject_state = $$props => {
		if ("cleaner" in $$props) cleaner = $$props.cleaner;
		if ("geolocator" in $$props) $$invalidate(1, geolocator = $$props.geolocator);
		if ("searching" in $$props) $$invalidate(2, searching = $$props.searching);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [getPosition, geolocator, searching, button_binding];
}

class Geolocator extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { getPosition: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Geolocator",
			options,
			id: create_fragment.name
		});
	}

	get getPosition() {
		return this.$$.ctx[0];
	}

	set getPosition(value) {
		throw new Error("<Geolocator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Geocoder.svelte generated by Svelte v3.30.1 */
const file$1 = "src/components/Geocoder.svelte";

// (107:2) {#if geolocator}
function create_if_block(ctx) {
	let div;
	let geolocator_1;
	let current;
	geolocator_1 = new Geolocator({ $$inline: true });

	const block = {
		c: function create() {
			div = element("div");
			create_component(geolocator_1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(geolocator_1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "control");
			add_location(div, file$1, 107, 4, 3301);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(geolocator_1, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(geolocator_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(geolocator_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(geolocator_1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(107:2) {#if geolocator}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div1;
	let div0;
	let input;
	let t0;
	let span;
	let t1;
	let t2;
	let div1_id_value;
	let current;
	let mounted;
	let dispose;
	let if_block = /*geolocator*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			input = element("input");
			t0 = space();
			span = element("span");
			t1 = text("Votre position");
			t2 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			input = claim_element(div0_nodes, "INPUT", {
				id: true,
				class: true,
				type: true,
				autocomplete: true,
				name: true
			});

			t0 = claim_space(div0_nodes);
			span = claim_element(div0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, "Votre position");
			span_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			if (if_block) if_block.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "id", /*id*/ ctx[1]);
			attr_dev(input, "class", "input");
			attr_dev(input, "type", "text");
			attr_dev(input, "autocomplete", "off");
			attr_dev(input, "name", "coords");
			add_location(input, file$1, 93, 4, 3043);
			attr_dev(span, "class", "tag is-small");
			add_location(span, file$1, 102, 4, 3208);
			attr_dev(div0, "class", "control is-expanded has-icon-left");
			add_location(div0, file$1, 92, 2, 2991);
			attr_dev(div1, "id", div1_id_value = "search-container-" + /*id*/ ctx[1]);
			attr_dev(div1, "class", "field jawg-geocoder");
			toggle_class(div1, "has-addons", /*geolocator*/ ctx[0]);
			add_location(div1, file$1, 91, 0, 2898);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, input);
			set_input_value(input, /*query*/ ctx[2]);
			append_dev(div0, t0);
			append_dev(div0, span);
			append_dev(span, t1);
			append_dev(div1, t2);
			if (if_block) if_block.m(div1, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(input, "focus", /*focusInput*/ ctx[3], false, false, false),
					listen_dev(input, "input", /*input_input_handler*/ ctx[6])
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*id*/ 2) {
				attr_dev(input, "id", /*id*/ ctx[1]);
			}

			if (dirty & /*query*/ 4 && input.value !== /*query*/ ctx[2]) {
				set_input_value(input, /*query*/ ctx[2]);
			}

			if (/*geolocator*/ ctx[0]) {
				if (if_block) {
					if (dirty & /*geolocator*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div1, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (!current || dirty & /*id*/ 2 && div1_id_value !== (div1_id_value = "search-container-" + /*id*/ ctx[1])) {
				attr_dev(div1, "id", div1_id_value);
			}

			if (dirty & /*geolocator*/ 1) {
				toggle_class(div1, "has-addons", /*geolocator*/ ctx[0]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Geocoder", slots, []);
	const dispatch = createEventDispatcher();
	let { geolocator = false } = $$props;
	let { id = "searchbox" } = $$props;
	let { placeholder = "Search a place" } = $$props;
	let { center = { lat: 48.866667, lng: 2.333333 } } = $$props;
	let query;
	let geolocated = false;

	const focusInput = () => {
		if (query) {
			document.execCommand("selectAll");
		}
	};

	onMount(async () => {
		const autoCompleteModule = await Promise.all([import('./autoComplete.min.86378da8.js'), ]).then(function(x) { return x[0]; }).then(function (n) { return n.a; });
		const autoComplete = autoCompleteModule.default;

		const ac = new autoComplete({
				data: {
					src: async () => {
						const { lat, lng } = center;
						const token = config.jawg.acccess_token;
						const searchquery = query;
						const source = await fetch(`https://api.jawg.io/places/v1/autocomplete?size=10&text=${searchquery}&focus.point.lat=${lat}&focus.point.lon=${lng}&boundary.country=FR&access-token=${token}`);
						const data = await source.json();

						const ret = data.features.reduce(
							(acc, val) => {
								val.properties["geometry"] = val.geometry;
								return [...acc, val.properties];
							},
							[]
						);

						return ret;
					},
					key: ["label"],
					cache: false
				},
				placeHolder: placeholder,
				selector: "#" + id,
				threshold: 2,
				debounce: 200,
				trigger: ["input", "focus"],
				searchEngine: (query, record) => {
					return record;
				},
				sort: (firstResult, secondResult) => {
					if (firstResult.value.distance < secondResult.value.distance) return -1;
					if (firstResult.value.distance > secondResult.value.distance) return 1;
					return 0;
				},
				resultsList: {
					render: true,
					destination: `#search-container-${id}`,
					position: "beforeend",
					element: "ul"
				},
				maxResults: 10,
				highlight: true,
				resultItem: {
					content: (data, source) => {
						source.innerHTML = data.label;
					},
					element: "li"
				},
				noResults: (dataFeedback, generateList) => {
					generateList(ac, dataFeedback, dataFeedback.results);
					const result = document.createElement("li");
					result.setAttribute("class", "no_result");
					result.setAttribute("tabindex", "1");
					result.innerHTML = `<span>Found No Results for "${dataFeedback.query}"</span>`;
					document.querySelector(`#${ac.resultsList.idName}`).appendChild(result);
				},
				onSelection: feedback => {
					const coords = feedback.selection.value.geometry.coordinates;
					$$invalidate(2, query = feedback.selection.value.label);
					dispatch("geocode", { coords });
				}
			});
	});

	const writable_props = ["geolocator", "id", "placeholder", "center"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Geocoder> was created with unknown prop '${key}'`);
	});

	function input_input_handler() {
		query = this.value;
		$$invalidate(2, query);
	}

	$$self.$$set = $$props => {
		if ("geolocator" in $$props) $$invalidate(0, geolocator = $$props.geolocator);
		if ("id" in $$props) $$invalidate(1, id = $$props.id);
		if ("placeholder" in $$props) $$invalidate(4, placeholder = $$props.placeholder);
		if ("center" in $$props) $$invalidate(5, center = $$props.center);
	};

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		config,
		Geolocator,
		dispatch,
		geolocator,
		id,
		placeholder,
		center,
		query,
		geolocated,
		focusInput
	});

	$$self.$inject_state = $$props => {
		if ("geolocator" in $$props) $$invalidate(0, geolocator = $$props.geolocator);
		if ("id" in $$props) $$invalidate(1, id = $$props.id);
		if ("placeholder" in $$props) $$invalidate(4, placeholder = $$props.placeholder);
		if ("center" in $$props) $$invalidate(5, center = $$props.center);
		if ("query" in $$props) $$invalidate(2, query = $$props.query);
		if ("geolocated" in $$props) geolocated = $$props.geolocated;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [geolocator, id, query, focusInput, placeholder, center, input_input_handler];
}

class Geocoder extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			geolocator: 0,
			id: 1,
			placeholder: 4,
			center: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Geocoder",
			options,
			id: create_fragment$1.name
		});
	}

	get geolocator() {
		throw new Error("<Geocoder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set geolocator(value) {
		throw new Error("<Geocoder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<Geocoder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<Geocoder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get placeholder() {
		throw new Error("<Geocoder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set placeholder(value) {
		throw new Error("<Geocoder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get center() {
		throw new Error("<Geocoder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set center(value) {
		throw new Error("<Geocoder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Geocoder as G, Geolocator as a, config as c };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvY29kZXIuYjM4NTQwMTEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAuY29uZmlnLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR2VvbG9jYXRvci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW9jb2Rlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGphd2c6IHtcbiAgICAgICAgYWNjY2Vzc190b2tlbjogXCI0Y0t0RTRSemUxSHJ2eFdhOWE3bWRvbFNrMTBsVlRoVEZDOHphZFFZTUlNeFRqa3BUZUlESkFBbWhSZURHbkNIXCJcbiAgICB9LFxuICAgIG1hcGJveDoge1xuICAgICAgICBhcGlrZXk6IFwicGsuZXlKMUlqb2labkJoYzNOaGJtbDBhU0lzSW1FaU9pSXhOVGczTUdSbFpXUXlOalZrWmpFeE1HVmxOV1ZqTkRGak9XUXlOek5pTWlKOS5wWUtEbE80di1TTmlEejA4RzlaWm9RXCIsXG4gICAgICAgIGluaXQ6IHsgLyogZGVmYXVsdCBtYXAgbG9jYXRpb24gKGNlbnRlciBvZiB0aGUgbWFwLCBhbmQgem9vbSBsZXZlbCkgKi9cbiAgICAgICAgICAgIHpvb206IDEyLFxuICAgICAgICAgICAgY2VudGVyOiBbMi4zNDc0NTcsNDguODU3NjI3XVxuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogXCJodHRwczovL2FwaS5qYXdnLmlvL3N0eWxlcy9qYXdnLWxpZ2h0Lmpzb24/YWNjZXNzLXRva2VuPTRjS3RFNFJ6ZTFIcnZ4V2E5YTdtZG9sU2sxMGxWVGhURkM4emFkUVlNSU14VGprcFRlSURKQUFtaFJlREduQ0hcIixcbiAgICAgICAgZ2VvY29kZXI6IHsgLyogTmFycm93IHNlYXJjaCByZXN1bHRzIHRvIHRoZSBkZWZpbmVkIGJvdW5kaW5nYm94IHRvIGF2b2lkIHRvIG1hbnkgbm9pc2VzICovXG4gICAgICAgICAgICBzZWFyY2hiYm94OiBbMi4xMDgwNjUsIDUwLjg5NjA1MSwgMi42MDg2MjksIDUxLjEzMjc3OF0sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaGVyY2hlciB1bmUgYWRyZXNzZVwiXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzdG9yZToge1xuICAgICAgICB1bmlxdWVfaWRzOiBbJ25vbV9kZV9sYV9zb2NpZXRlJywgJ2FkcmVzc2VfZHVfcG9pbnRfZGVfdmVudGUnXVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBiYXNldXJsOiBcImh0dHBzOi8vZnBhc3Nhbml0aS5vcGVuZGF0YXNvZnQuY29tL2FwaS92Mi9jYXRhbG9nL2RhdGFzZXRzL2xlcy1hcmJyZXMvZXhwb3J0cy9nZW9qc29uXCIsXG4gICAgICAgIHF1ZXJ5OiBcIj9zZWxlY3Q9KiZ3aGVyZT0lMjJQQVJJUysxMkUrQVJSRFQlMjImcm93cz00OTk5OVwiLFxuICAgICAgICBjbHVzdGVyaW5nOiBmYWxzZSxcbiAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IC8vIG1hbmRhdG9yeSwga2VlcCBhIGRlZmF1bHQgaWNvblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzbHVnXCI6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNmNWY1ZjVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlRyYWl0ZXVyIC0gcmVzdGF1cmF0aW9uIMOgIGVtcG9ydGVyXCI6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInNsdWdcIjogXCJ0cmFpdGV1clwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNGREQ5OEJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIFwiUHJpbWV1ciAtIGZydWl0cyBldCBsw6lndW1lc1wiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzbHVnXCI6IFwicHJpbWV1clwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIiMxRUE4MUFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIFwiUG9pc3Nvbm5lcmllXCI6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInNsdWdcIjogXCJwb2lzc29ubmVyaWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCIjODZCMUZDXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAsXG4gICAgICAgICAgICBcIkxpdnJhaXNvbnNcIjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic2x1Z1wiOiBcInRydWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIzM2NDg1MlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgXCJCb3VjaGVyaWUgLSBjaGFyY3V0ZXJpZVwiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzbHVnXCI6IFwiYm91Y2hlcmllX2NoYXJjdXRlcmllXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI0NCMzAxOVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgXCJDcsOobWVyaWUgLSBmcm9tYWdlcmllXCI6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInNsdWdcIjogXCJmcm9tYWdlcmllXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI0ZEREIwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgXCJWaW5zIC0gYmnDqHJlcyAtIHNwaXJpdHVldXhcIjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic2x1Z1wiOiBcInZpblwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNGOTAxMjZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIFwiQm91bGFuZ2VyaWUgLSBww6J0aXNzZXJpZVwiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzbHVnXCI6IFwiYm91bGFuZ2VyaWVfcGF0aXNzZXJpZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNFMkE3NkZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIFwiRHJpdmVcIjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic2x1Z1wiOiBcInRydWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIzM2NDg1MlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgXCLDiXBpY2VyaWVcIjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic2x1Z1wiOiBcImVwaWNlcmllXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI0ZERDk4QlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgXCJBbGltZW50YXRpb24gZ8OpbsOpcmFsZVwiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzbHVnXCI6IFwiYWxpbWVudGF0aW9uX2dlbmVyYWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI0UwNjAwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgXCJTdXBlcm1hcmNow6kgb3UgaHlwZXJtYXJjaMOpXCI6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInNsdWdcIjogXCJzdXBlcm1hcmNoZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIiMzNjQ4NTJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uTW91bnQsIG9uRGVzdHJveSB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdvdG8gfSBmcm9tICdAc2FwcGVyL2FwcCc7XG5cbiAgbGV0IGNsZWFuZXIgPSAvKFsrLV0/XFxkK1suXT9cXGR7MCw2fSlcXGQqLztcbiAgbGV0IGdlb2xvY2F0b3I7XG4gIGxldCBzZWFyY2hpbmcgPSBmYWxzZTtcblxuICBjb25zdCBzZXRHZW8gPSAocCkgPT4ge1xuICAgIHNlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24pO1xuICAgIGxldCBsYXQgPSBjbGVhbmVyLmV4ZWMocC5jb29yZHMubGF0aXR1ZGUpWzFdO1xuICAgIGxldCBsb25nID0gY2xlYW5lci5leGVjKHAuY29vcmRzLmxvbmdpdHVkZSlbMV07XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2Nvb3JkcycsIGxvbmcgKyAnLCcgKyBsYXQpO1xuICAgIGdvdG8odXJsKTtcbiAgfTtcblxuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgdGltZW91dDogMTAwMDAsXG4gICAgbWF4aW11bUFnZTogSW5maW5pdHksXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGlmICghbmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWFyY2hpbmcgPSB0cnVlO1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc2V0R2VvLCBjb25zb2xlLmVycm9yLCBzZXR0aW5ncyk7XG4gIH07XG48L3NjcmlwdD5cblxuPGJ1dHRvblxuICBjbGFzcz1cImJ1dHRvbiBpcy1kYXJrXCJcbiAgY2xhc3M6c3Bpbj17c2VhcmNoaW5nfVxuICBiaW5kOnRoaXM9e2dlb2xvY2F0b3J9XG4gIG9uOmNsaWNrPXtnZXRQb3NpdGlvbn1cbj5cbiAgPGltZyBzcmM9XCIvbG9jYXRpb24uc3ZnXCIgLz5cbjwvYnV0dG9uPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnNwaW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW1nIHtcbiAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW47XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IGNvbmZpZyBmcm9tICdAL2FwcC5jb25maWcnO1xuXG4gIGltcG9ydCBHZW9sb2NhdG9yIGZyb20gJ0AvY29tcG9uZW50cy9HZW9sb2NhdG9yLnN2ZWx0ZSc7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblxuICAvKmV4cG9ydCBsZXQgbWFya2VyID0gdHJ1ZTsqL1xuICBleHBvcnQgbGV0IGdlb2xvY2F0b3IgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpZCA9ICdzZWFyY2hib3gnO1xuICBleHBvcnQgbGV0IHBsYWNlaG9sZGVyID0gJ1NlYXJjaCBhIHBsYWNlJztcbiAgZXhwb3J0IGxldCBjZW50ZXIgPSB7XG4gICAgbGF0OiA0OC44NjY2NjcsXG4gICAgbG5nOiAyLjMzMzMzMyxcbiAgfTtcbiAgbGV0IHF1ZXJ5O1xuICBsZXQgZ2VvbG9jYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGZvY3VzSW5wdXQgPSAoKSA9PiB7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc2VsZWN0QWxsJyk7XG4gICAgfVxuICB9O1xuXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZU1vZHVsZSA9IGF3YWl0IGltcG9ydCgnQHRhcmVrcmFhZmF0L2F1dG9jb21wbGV0ZS5qcycpO1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IGF1dG9Db21wbGV0ZU1vZHVsZS5kZWZhdWx0O1xuICAgIGNvbnN0IGFjID0gbmV3IGF1dG9Db21wbGV0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNyYzogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGNlbnRlcjtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGNvbmZpZy5qYXdnLmFjY2Nlc3NfdG9rZW47XG4gICAgICAgICAgY29uc3Qgc2VhcmNocXVlcnkgPSBxdWVyeTtcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL2FwaS5qYXdnLmlvL3BsYWNlcy92MS9hdXRvY29tcGxldGU/c2l6ZT0xMCZ0ZXh0PSR7c2VhcmNocXVlcnl9JmZvY3VzLnBvaW50LmxhdD0ke2xhdH0mZm9jdXMucG9pbnQubG9uPSR7bG5nfSZib3VuZGFyeS5jb3VudHJ5PUZSJmFjY2Vzcy10b2tlbj0ke3Rva2VufWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc291cmNlLmpzb24oKTtcbiAgICAgICAgICBjb25zdCByZXQgPSBkYXRhLmZlYXR1cmVzLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAgICAgICAgIHZhbC5wcm9wZXJ0aWVzWydnZW9tZXRyeSddID0gdmFsLmdlb21ldHJ5O1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5hY2MsIHZhbC5wcm9wZXJ0aWVzXTtcbiAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBbJ2xhYmVsJ10sXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwbGFjZUhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBzZWxlY3RvcjogJyMnICsgaWQsXG4gICAgICB0aHJlc2hvbGQ6IDIsXG4gICAgICBkZWJvdW5jZTogMjAwLFxuICAgICAgdHJpZ2dlcjogWydpbnB1dCcsICdmb2N1cyddLFxuICAgICAgc2VhcmNoRW5naW5lOiAocXVlcnksIHJlY29yZCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgICAgfSxcbiAgICAgIHNvcnQ6IChmaXJzdFJlc3VsdCwgc2Vjb25kUmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChmaXJzdFJlc3VsdC52YWx1ZS5kaXN0YW5jZSA8IHNlY29uZFJlc3VsdC52YWx1ZS5kaXN0YW5jZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoZmlyc3RSZXN1bHQudmFsdWUuZGlzdGFuY2UgPiBzZWNvbmRSZXN1bHQudmFsdWUuZGlzdGFuY2UpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0sXG4gICAgICByZXN1bHRzTGlzdDoge1xuICAgICAgICByZW5kZXI6IHRydWUsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBgI3NlYXJjaC1jb250YWluZXItJHtpZH1gLFxuICAgICAgICBwb3NpdGlvbjogJ2JlZm9yZWVuZCcsXG4gICAgICAgIGVsZW1lbnQ6ICd1bCcsXG4gICAgICB9LFxuICAgICAgbWF4UmVzdWx0czogMTAsXG4gICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICByZXN1bHRJdGVtOiB7XG4gICAgICAgIGNvbnRlbnQ6IChkYXRhLCBzb3VyY2UpID0+IHtcbiAgICAgICAgICBzb3VyY2UuaW5uZXJIVE1MID0gZGF0YS5sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudDogJ2xpJyxcbiAgICAgIH0sXG4gICAgICBub1Jlc3VsdHM6IChkYXRhRmVlZGJhY2ssIGdlbmVyYXRlTGlzdCkgPT4ge1xuICAgICAgICBnZW5lcmF0ZUxpc3QoYWMsIGRhdGFGZWVkYmFjaywgZGF0YUZlZWRiYWNrLnJlc3VsdHMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdub19yZXN1bHQnKTtcbiAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMScpO1xuICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gYDxzcGFuPkZvdW5kIE5vIFJlc3VsdHMgZm9yIFwiJHtkYXRhRmVlZGJhY2sucXVlcnl9XCI8L3NwYW4+YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWMucmVzdWx0c0xpc3QuaWROYW1lfWApLmFwcGVuZENoaWxkKHJlc3VsdCk7XG4gICAgICB9LFxuICAgICAgb25TZWxlY3Rpb246IChmZWVkYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBmZWVkYmFjay5zZWxlY3Rpb24udmFsdWUuZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gICAgICAgIHF1ZXJ5ID0gZmVlZGJhY2suc2VsZWN0aW9uLnZhbHVlLmxhYmVsO1xuICAgICAgICBkaXNwYXRjaCgnZ2VvY29kZScsIHsgY29vcmRzIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG48L3NjcmlwdD5cblxuPGRpdiBpZD1cInNlYXJjaC1jb250YWluZXIte2lkfVwiIGNsYXNzPVwiZmllbGQgamF3Zy1nZW9jb2RlclwiIGNsYXNzOmhhcy1hZGRvbnM9e2dlb2xvY2F0b3J9PlxuICA8ZGl2IGNsYXNzPVwiY29udHJvbCBpcy1leHBhbmRlZCBoYXMtaWNvbi1sZWZ0XCI+XG4gICAgPGlucHV0XG4gICAgICB7aWR9XG4gICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICBuYW1lPVwiY29vcmRzXCJcbiAgICAgIG9uOmZvY3VzPXtmb2N1c0lucHV0fVxuICAgICAgYmluZDp2YWx1ZT17cXVlcnl9XG4gICAgLz5cbiAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1zbWFsbFwiPlxuICAgICAgVm90cmUgcG9zaXRpb25cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICB7I2lmIGdlb2xvY2F0b3J9XG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgIDxHZW9sb2NhdG9yIC8+XG4gICAgPC9kaXY+XG4gIHsvaWZ9XG48L2Rpdj5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgZ2xvYmFsPlxuICBAaW1wb3J0ICdzcmMvc3R5bGVzL19vZHMtZGVzaWduLXN5c3RlbS5zY3NzJztcblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogOHB4O1xuICB9XG5cbiAgLmphd2ctZ2VvY29kZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB1bCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogJHNwYWNpbmctMzAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcblxuICAgICAgICAmLmF1dG9Db21wbGV0ZV9zZWxlY3RlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGFBQWU7QUFDZixJQUFJLElBQUksRUFBRTtBQUNWLFFBQVEsYUFBYSxFQUFFLGtFQUFrRTtBQUN6RixLQUFLO0FBQ0wsSUFBSSxNQUFNLEVBQUU7QUFDWixRQUFRLE1BQU0sRUFBRSx3R0FBd0c7QUFDeEgsUUFBUSxJQUFJLEVBQUU7QUFDZCxZQUFZLElBQUksRUFBRSxFQUFF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
