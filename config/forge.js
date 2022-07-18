module.exports = {
    packagerConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                authors: "rus_anonym",
                exe: `app.exe`,
                name: "app",
            },
        },
        {
            name: "@electron-forge/maker-zip",
        },
        {
            name: "@electron-forge/maker-deb",
        },
        {
            name: "@electron-forge/maker-rpm",
        },
    ],
    plugins: [
        [
            "@electron-forge/plugin-webpack",
            {
                mainConfig: "./config/webpack.main.js",
                renderer: {
                    config: "./config/webpack.renderer.js",
                    entryPoints: [
                        {
                            html: "./src/web/index.html",
                            js: "./src/web/index.tsx",
                            name: "main_window",
                            preload: {
                                js: "./src/API/bridge.ts",
                            },
                        },
                    ],
                },
            },
        ],
    ],
};
