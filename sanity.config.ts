import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: 'hwaywruo',
    dataset: 'production',
    title: 'My personal website',
    apiVersion: '2021-04-22',
    basePath: '/admin',
    plugins: [deskTool()],
});

export  default config;