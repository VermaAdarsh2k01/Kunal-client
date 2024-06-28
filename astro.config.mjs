import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [react(), tailwind() , sanity({
    projectId: "7ryphrdj",
    dataset: 'production',
    apiVersion: '2024-06-28',
    useCdn: true,
  })]
});