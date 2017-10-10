module.exports = {
   extends: "airbnb",   
   env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true
  },
   rules: {
      semi: [
         2, "always"
      ],
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": [
         "warn", {
            "aspects": ["invalidHref"]
         }
      ],

      "react/react-in-jsx-scope": 0,
      "react/jsx-indent": 0,
      "react/jsx-indent-props": 0,
      "react/forbid-prop-types": 0,
      // "linebreak-style": ["error", "never"],
      
      "linebreak-style": 0,
      "indent": [
         2, 3
      ],
      "comma-dangle": 0,
      "no-unused-vars": 1,
      "object-curly-spacing": 1
   },
   plugins: ["react"]
};