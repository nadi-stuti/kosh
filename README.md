# NadiStuti: Holy Rivers of India Wiki

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A comprehensive wiki dedicated to documenting the sacred rivers of India, their history, mythology, rituals, ecology, and cultural significance. Explore the lifeblood of India's spirituality and heritage.

## 🌊 About NadiStuti

"NadiStuti" means "Praise of Rivers" in Sanskrit. This project aims to create an open-source, detailed resource on India's holy rivers, including the Ganges (Ganga), Yamuna, Saraswati, and more. From ancient rituals to modern conservation efforts, discover the profound impact these rivers have on Indian culture and the environment.

## 🚀 Project Structure

Inside your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx
│   │       ├── rivers/
│   │       │   ├── ganga/
│   │       │   │   ├── index.mdx
│   │       │   │   ├── rituals.md
│   │       │   │   └── ngos-and-ashrams.md
│   │       │   └── yamuna/
│   │       │       ├── data.mdx
│   │       │       └── index.mdx
│   │       ├── guides/
│   │       │   └── github.md
│   │       └── reference/
│   │           └── example.md
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 Explore the Rivers

- **[Ganga (Ganges)](src/content/docs/rivers/ganga/index.mdx)**: The most sacred river, source of life and spirituality.
- **[Yamuna](src/content/docs/rivers/yamuna/index.mdx)**: Daughter of the Sun, facing modern challenges.
- **More Rivers**: Contributions welcome for Saraswati, Godavari, and others.

Dive into sections on mythology, rituals, data, conservation, and more.

## 🤝 Contributing

We welcome contributions! Whether it's adding new river details, correcting information, or improving the documentation:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

Check out our [GitHub Guide](src/content/docs/guides/github.md) for more details.

## 👀 Want to Learn More?

Check out [Starlight’s docs](https://starlight.astro.build/) for documentation site features, read [the Astro documentation](https://docs.astro.build), or join the [Astro Discord server](https://astro.build/chat).

For river-specific resources, explore academic papers, ancient texts, or join conservation groups.
