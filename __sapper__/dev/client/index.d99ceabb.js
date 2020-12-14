import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, r as noop } from './client.edb7539b.js';

/* src/routes/farms/index.svelte generated by Svelte v3.30.1 */

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
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

async function preload(page, session) {
	return this.redirect(301, "farms/all");
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Farms", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Farms> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ preload });
	return [];
}

class Farms extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Farms",
			options,
			id: create_fragment.name
		});
	}
}

export default Farms;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDk5Y2VhYmIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZmFybXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkaXJlY3QoMzAxLCAnZmFybXMvYWxsJyk7XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ3dCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=