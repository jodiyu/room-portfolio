# 3D Portfolio

An interactive portfolio built with **React Three Fiber** and **React**.  

The goal of the project is to experiment with **3D interfaces** while maintaining smooth performance.

---

## Demo

![3D Portfolio Demo](assets/demo.gif)

---

## Features

- Interactive **3D room environment**
- Clickable objects representing portfolio sections
- Camera navigation with drag interaction

---

## Interaction Model

| Object | Function |
|------|------|
| Desk | Projects |
| Diploma | Resume |
| Bookshelf | Reading list |
| Poster | Dance Videos |
| Business Suit | Presentations |
| Window | Weather animations |
| Bed | Dark mode toggle |

Users can rotate the camera and click objects to open the corresponding overlay.

---

## Technologies

### Core Stack

- React
- React Three Fiber
- Three.js
- TypeScript
- Vite

## Project Structure

```text
3d-portfolio/
├── public/                  
│   └── models/              # 3D model files
│
├── src/
│   ├── assets/              # Images and textures
│   ├── content/             # Portfolio content 
│   ├── scene/               # 3D scene components (Room, Props, Weather, etc.)
│   ├── ui/                  # UI overlays and texts
│   │
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
│
├── package.json            
├── tsconfig.json            
├── vite.config.ts          
└── README.md


