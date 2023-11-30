// vite.config.js
import { readFileSync } from "fs";
import { sveltekit } from "file:///C:/Users/Lucas%20S.%20Tavares/OneDrive/%C3%81rea%20de%20Trabalho/DATAVIZ/G20DatavizED/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { timeFormat } from "file:///C:/Users/Lucas%20S.%20Tavares/OneDrive/%C3%81rea%20de%20Trabalho/DATAVIZ/G20DatavizED/node_modules/d3/src/index.js";
import path from "path";
import svg from "file:///C:/Users/Lucas%20S.%20Tavares/OneDrive/%C3%81rea%20de%20Trabalho/DATAVIZ/G20DatavizED/node_modules/vite-plugin-svgstring/index.js";
import dsv from "file:///C:/Users/Lucas%20S.%20Tavares/OneDrive/%C3%81rea%20de%20Trabalho/DATAVIZ/G20DatavizED/node_modules/@rollup/plugin-dsv/dist/es/index.js";
var { version } = JSON.parse(readFileSync("package.json", "utf8"));
var timestamp = timeFormat("%Y-%m-%d-%H:%M")(/* @__PURE__ */ new Date());
var config = {
  define: {
    __VERSION__: JSON.stringify(version),
    __TIMESTAMP__: JSON.stringify(timestamp)
  },
  plugins: [
    sveltekit(),
    dsv(),
    svg()
  ],
  resolve: {
    alias: {
      "$actions": path.resolve("./src/actions"),
      "$components": path.resolve("./src/components"),
      "$data": path.resolve("./src/data"),
      "$routes": path.resolve("./src/routes"),
      "$stores": path.resolve("./src/stores"),
      "$styles": path.resolve("./src/styles"),
      "$svg": path.resolve("./src/svg"),
      "$utils": path.resolve("./src/utils")
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMdWNhcyBTLiBUYXZhcmVzXFxcXE9uZURyaXZlXFxcXFx1MDBDMXJlYSBkZSBUcmFiYWxob1xcXFxEQVRBVklaXFxcXEcyMERhdGF2aXpFRFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTHVjYXMgUy4gVGF2YXJlc1xcXFxPbmVEcml2ZVxcXFxcdTAwQzFyZWEgZGUgVHJhYmFsaG9cXFxcREFUQVZJWlxcXFxHMjBEYXRhdml6RURcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0x1Y2FzJTIwUy4lMjBUYXZhcmVzL09uZURyaXZlLyVDMyU4MXJlYSUyMGRlJTIwVHJhYmFsaG8vREFUQVZJWi9HMjBEYXRhdml6RUQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcclxuaW1wb3J0IHsgdGltZUZvcm1hdCB9IGZyb20gXCJkM1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgc3ZnIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdzdHJpbmdcIjtcclxuaW1wb3J0IGRzdiBmcm9tIFwiQHJvbGx1cC9wbHVnaW4tZHN2XCI7XHJcblxyXG5jb25zdCB7IHZlcnNpb24gfSA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKFwicGFja2FnZS5qc29uXCIsIFwidXRmOFwiKSk7XHJcbmNvbnN0IHRpbWVzdGFtcCA9IHRpbWVGb3JtYXQoXCIlWS0lbS0lZC0lSDolTVwiKShuZXcgRGF0ZSgpKTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuXHRkZWZpbmU6IHtcclxuXHRcdF9fVkVSU0lPTl9fOiBKU09OLnN0cmluZ2lmeSh2ZXJzaW9uKSxcclxuXHRcdF9fVElNRVNUQU1QX186IEpTT04uc3RyaW5naWZ5KHRpbWVzdGFtcClcclxuXHR9LFxyXG5cdHBsdWdpbnM6IFtcclxuXHRcdHN2ZWx0ZWtpdCgpLFxyXG5cdFx0ZHN2KCksXHJcblx0XHRzdmcoKVxyXG5cdF0sXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0YWxpYXM6IHtcclxuXHRcdFx0XCIkYWN0aW9uc1wiOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9hY3Rpb25zXCIpLFxyXG5cdFx0XHRcIiRjb21wb25lbnRzXCI6IHBhdGgucmVzb2x2ZShcIi4vc3JjL2NvbXBvbmVudHNcIiksXHJcblx0XHRcdFwiJGRhdGFcIjogcGF0aC5yZXNvbHZlKFwiLi9zcmMvZGF0YVwiKSxcclxuXHRcdFx0XCIkcm91dGVzXCI6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3JvdXRlc1wiKSxcclxuXHRcdFx0XCIkc3RvcmVzXCI6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3N0b3Jlc1wiKSxcclxuXHRcdFx0XCIkc3R5bGVzXCI6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3N0eWxlc1wiKSxcclxuXHRcdFx0XCIkc3ZnXCI6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3N2Z1wiKSxcclxuXHRcdFx0XCIkdXRpbHNcIjogcGF0aC5yZXNvbHZlKFwiLi9zcmMvdXRpbHNcIilcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcWEsU0FBUyxvQkFBb0I7QUFDbGMsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFFaEIsSUFBTSxFQUFFLFFBQVEsSUFBSSxLQUFLLE1BQU0sYUFBYSxnQkFBZ0IsTUFBTSxDQUFDO0FBQ25FLElBQU0sWUFBWSxXQUFXLGdCQUFnQixFQUFFLG9CQUFJLEtBQUssQ0FBQztBQUV6RCxJQUFNLFNBQVM7QUFBQSxFQUNkLFFBQVE7QUFBQSxJQUNQLGFBQWEsS0FBSyxVQUFVLE9BQU87QUFBQSxJQUNuQyxlQUFlLEtBQUssVUFBVSxTQUFTO0FBQUEsRUFDeEM7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxFQUNMO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixZQUFZLEtBQUssUUFBUSxlQUFlO0FBQUEsTUFDeEMsZUFBZSxLQUFLLFFBQVEsa0JBQWtCO0FBQUEsTUFDOUMsU0FBUyxLQUFLLFFBQVEsWUFBWTtBQUFBLE1BQ2xDLFdBQVcsS0FBSyxRQUFRLGNBQWM7QUFBQSxNQUN0QyxXQUFXLEtBQUssUUFBUSxjQUFjO0FBQUEsTUFDdEMsV0FBVyxLQUFLLFFBQVEsY0FBYztBQUFBLE1BQ3RDLFFBQVEsS0FBSyxRQUFRLFdBQVc7QUFBQSxNQUNoQyxVQUFVLEtBQUssUUFBUSxhQUFhO0FBQUEsSUFDckM7QUFBQSxFQUNEO0FBQ0Q7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
