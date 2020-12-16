export default {
  backend: {
    name: "firestore",
    firebase: {
      index_data: {
        garden: "mdx",
      },
      appName: "cms-on-fire", // used by firebase-react-provider
      config: {
        apiKey: "AIzaSyCPyPY-bX_X67v9WbwX_C8MzRdkzrrcliw",
        authDomain: "cms-on-fire.firebaseapp.com",
        databaseURL: "https://cms-on-fire.firebaseio.com",
        projectId: "cms-on-fire",
        storageBucket: "cms-on-fire.appspot.com",
        messagingSenderId: "915192632961",
        appId: "1:915192632961:web:e21ebe4fd027a886af9f80",
        measurementId: "G-PV8B3LZ29D", // optional for SDK > v7.20
      },
      signInOptions: [
        // {
        //   provider: "EmailAuthProvider",
        //   options: {
        //     requireDisplayName: true,
        //   },
        // },
        {
          provider: "GoogleAuthProvider",
          options: {
            customParameters: {
              prompt: "select_account",
            },
          },
        },
      ],
    },
  },
  publish_mode: "editorial_workflow",
  media_folder: "images",
  public_folder:
    "//firebasestorage.googleapis.com/v0/b/cms-on-fire.appspot.com/o/images",
  logo_src: "/logo192.png",
  load_config_file: false, // tells netlify-cms-app to ignore the config.yml
  collections: [
    {
      name: "settings",
      label: "Settings",
      delete: false,
      editor: {
        preview: true,
      },
      files: [
        {
          file: "data/settings/site-metadata.json",
          name: "siteMetadata",
          label: "Site Metadata",
          fields: [
            {
              name: "title",
              label: "Title",
              widget: "string",
            },
            {
              name: "author",
              label: "Author Name",
              widget: "string",
            },
            {
              name: "organization",
              label: "Organization Name",
              widget: "string",
            },
            {
              name: "description",
              label: "Description",
              widget: "string",
            },
            {
              name: "titleTemplate",
              label: "Title Template",
              widget: "string",
              required: true,
            },
            {
              name: "url",
              label: "Site URL",
              widget: "string",
              required: true,
            },
            {
              name: "image",
              label: "Site Image",
              widget: "image",
              required: true,
            },
            {
              name: "owner",
              label: "Site owner",
              widget: "string",
              required: true,
            },
            {
              name: "twitterUsername",
              label: "TwitterUsername",
              widget: "string",
              required: true,
            },
            {
              name: "twitterCardType",
              label: "Twitter Card Type",
              widget: "string",
              required: false,
              default: "summary_large_image",
            },
            {
              name: "facebookAppID",
              label: "Facebook App ID",
              widget: "string",
              required: true,
            },
          ],
        },
        {
          file: "data/settings/attribution.json",
          name: "attribution",
          label: "Attribution Settings",
          fields: [
            {
              name: "people",
              label: "People Attribution",
              widget: "list",
              fields: [
                {
                  name: "name",
                  label: "Name",
                  widget: "string",
                  required: true,
                },
                {
                  name: "attribution_hidden",
                  label: "Hide this Attribution?",
                  widget: "boolean",
                },
                {
                  name: "intro",
                  label: "Introduction (pre)",
                  widget: "string",
                  required: true,
                },
                {
                  name: "url",
                  label: "Name Link Url",
                  widget: "string",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          file: "data/settings/footer.json",
          name: "footer",
          label: "Footer Settings",
          fields: [
            {
              name: "copyright",
              label: "Copyright Name",
              widget: "string",
              required: true,
            },
            {
              name: "attributionName",
              label: "Attribution Name",
              widget: "string",
              required: true,
            },
            {
              name: "attributionURL",
              label: "Attribution URL",
              widget: "string",
              required: true,
            },
            {
              name: "cta",
              label: "Call To Action",
              widget: "object",
              required: true,
              fields: [
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                  required: true,
                },
                {
                  name: "sub_title",
                  label: "Title",
                  widget: "string",
                  required: true,
                },
                {
                  name: "button_value",
                  label: "Button Value",
                  widget: "string",
                  required: true,
                },
                {
                  name: "button_url",
                  label: "Button URL",
                  widget: "string",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          file: "data/settings/header.json",
          name: "header",
          label: "Header Settings",
          fields: [
            {
              name: "title",
              label: "Site Title",
              widget: "string",
              required: true,
            },
            {
              name: "introduction",
              label: "Introduction",
              widget: "markdown",
              required: true,
            },
            {
              name: "learn_more_hidden",
              label: "Hide Learn More?",
              widget: "boolean",
            },
            {
              name: "learn_more",
              label: "Learn More Title",
              widget: "string",
              required: true,
            },
            {
              name: "learn_more_url",
              label: "Learn More URL",
              widget: "string",
              required: true,
            },
          ],
        },
        {
          file: "data/settings/contact-settings.json",
          name: "contactSettings",
          label: "Contact Settings",
          fields: [
            {
              name: "title",
              label: "Heading Title",
              widget: "string",
              required: false,
              default: "",
            },
            {
              name: "author",
              label: "Author Name",
              widget: "string",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              widget: "markdown",
              required: true,
            },
            {
              widget: "object",
              name: "contact",
              label: "Contact",
              required: true,
              fields: [
                {
                  widget: "boolean",
                  name: "hidden",
                  label: "Hide from Contact",
                },
                {
                  widget: "string",
                  name: "name",
                  label: "Company Name",
                  required: true,
                },
                {
                  widget: "string",
                  name: "address",
                  label: "Street Address",
                },
                {
                  widget: "string",
                  name: "address2",
                  label: "Street Address 2",
                  required: false,
                },
                {
                  widget: "string",
                  name: "city",
                  label: "City",
                },
                {
                  widget: "string",
                  name: "state",
                  label: "State",
                },
                {
                  widget: "string",
                  name: "zipcode",
                  label: "Zipcode",
                },
                {
                  widget: "string",
                  name: "phone",
                  label: "Phone",
                },
                {
                  widget: "string",
                  name: "email",
                  label: "Email",
                },
              ],
            },
          ],
        },
        {
          name: "navigation",
          file: "data/settings/navigation.json",
          label: "Navigation",
          fields: [
            {
              widget: "object",
              name: "menu",
              label: "Menu",
              required: true,
              fields: [
                {
                  widget: "list",
                  name: "items",
                  label: "Menu Items",
                  allow_add: true,
                  required: true,
                  fields: [
                    {
                      widget: "string",
                      name: "label",
                      label: "Menu Display Label",
                      required: true,
                    },
                    {
                      widget: "string",
                      name: "title",
                      label: "Page Header Title",
                      required: false,
                      default: "",
                    },
                    {
                      widget: "boolean",
                      name: "hidden",
                      required: false,
                      label: "Hide from Menu",
                    },
                    {
                      widget: "string",
                      name: "name",
                      label: "Menu ID",
                      required: true,
                    },
                    {
                      widget: "image",
                      name: "image",
                      label: "Image Name with Extension",
                      required: true,
                    },
                    {
                      widget: "select",
                      name: "type",
                      label: "Link Type",
                      options: ["page", "route"],
                      required: true,
                    },
                    {
                      widget: "string",
                      name: "path",
                      label: "Route Path",
                    },
                    {
                      widget: "markdown",
                      name: "description",
                      label: "Description",
                    },
                    {
                      widget: "markdown",
                      name: "content",
                      label: "Page Content",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          file: "data/settings/social.json",
          name: "social_links",
          label: "Social Settings",
          fields: [
            {
              widget: "list",
              name: "types",
              label: "Social Type",
              allow_add: true,
              fields: [
                {
                  widget: "string",
                  name: "name",
                  label: "ID",
                },
                {
                  widget: "string",
                  name: "label",
                  label: "Label Name",
                },
                {
                  widget: "boolean",
                  name: "hidden",
                  label: "Hide ?",
                },
                {
                  widget: "string",
                  name: "url",
                  label: "Twitter URL",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "navigation",
      label: "Navigation",
      delete: false,
      editor: {
        preview: true,
      },
      files: [
        {
          name: "menu",
          file: "data/navigation/menu.json",
          label: "Menu",
          fields: [
            {
              widget: "list",
              name: "items",
              label: "Menu Items",
              allow_add: true,
              required: true,
              fields: [
                {
                  widget: "string",
                  name: "label",
                  label: "Menu Display Label",
                  required: true,
                },
                {
                  widget: "boolean",
                  name: "hidden",
                  required: false,
                  label: "Hide from Menu",
                },
                {
                  widget: "select",
                  name: "type",
                  label: "Link Type",
                  options: ["page", "route"],
                  required: true,
                },
                {
                  widget: "string",
                  name: "path",
                  label: "Route Path",
                },
                {
                  label: "Navigation Heading",
                  name: "heading",
                  widget: "relation",
                  collection: "navigationHeadings",
                  searchFields: ["name", "description"],
                  valueField: "name",
                  default: "default",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "posts",
      label: "Blog Posts",
      label_singular: "Post",
      description: "Blog Posts Items.\n",
      folder: "data/posts",
      extension: "mdx",
      format: "frontmatter",
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      create: true,
      fields: [
        {
          label: "Draft?",
          name: "draft",
          widget: "boolean",
          default: false,
          required: true,
        },
        {
          label: "Title",
          name: "title",
          widget: "string",
          tagname: "h1",
        },
        {
          label: "Slug Path (i.e. /post/this-example-post) [optional]",
          name: "slug",
          widget: "string",
          required: false,
        },
        {
          label: "Return Path (i.e. /posts/?q=notes+netlify) [optional]",
          name: "returnPath",
          widget: "string",
          required: false,
        },
        {
          label: "Publish Date",
          name: "date",
          widget: "datetime",
        },
        {
          label: "Update Date",
          name: "update",
          widget: "datetime",
          required: false,
        },
        {
          label: "Post",
          name: "body",
          widget: "markdown",
        },
        {
          label: "Description",
          name: "description",
          widget: "markdown",
        },
        {
          label: "Categories",
          name: "categories",
          widget: "list",
          default: ["javascript"],
        },
        {
          label: "Keywords",
          name: "keywords",
          widget: "list",
          default: ["react", "javascript"],
        },
        {
          label: "Garden Status",
          name: "garden",
          widget: "select",
          options: [
            {
              label: "Seed",
              value: "seed",
            },
            {
              label: "Sprout",
              value: "sprout",
            },
            {
              label: "Seedling",
              value: "seedling",
            },
            {
              label: "Sapling",
              value: "sapling",
            },
            {
              label: "Evergreen",
              value: "evergreen",
            },
          ],
          required: false,
        },
        {
          label: "Feature Image",
          name: "image",
          widget: "image",
          default: "android-chrome-192x192.png",
        },
        {
          label: "Entry Author",
          name: "author",
          widget: "relation",
          collection: "authors",
          searchFields: ["name", "description"],
          valueField: "tag",
          default: "admin",
        },
        {
          label: "StackOverflow Link",
          name: "solink",
          widget: "string",
          required: false,
        },
      ],
    },
    {
      name: "authors",
      label: "Authors",
      folder: "data/authors",
      extension: "json",
      description: "Author descriptions",
      identifier_field: "tag",
      slug: "{{slug}}",
      create: true,
      fields: [
        {
          label: "Tag(ie: talves)",
          name: "tag",
          widget: "string",
          hint: "Lowercase author id",
        },
        {
          name: "info",
          label: "Author Information",
          label_singular: "Information",
          widget: "object",
          fields: [
            {
              label: "Name",
              name: "name",
              widget: "string",
              hint: "First and Last",
            },
            {
              label: "Description",
              name: "description",
              widget: "markdown",
            },
          ],
        },
      ],
    },
  ],
};
