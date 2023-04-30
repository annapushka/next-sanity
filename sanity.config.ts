import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import shemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'hwaywruo',
    dataset: 'production',
    title: 'My personal website',
    apiVersion: '2023-04-22',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: shemas } 
});

export  default config;