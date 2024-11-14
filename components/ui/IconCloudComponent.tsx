// src/components/IconCloudComponent.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

// Cloud configuration properties
export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 0,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Render function for each icon with dynamic theme-based colors
export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export function IconCloudComponent() {
  const [icons, setIcons] = useState<SimpleIcon[]>([]);
  const { theme } = useTheme();

  // Fetch icons on mount
  useEffect(() => {
    const loadIcons = async () => {
      try {
        const fetchedIcons = await fetchSimpleIcons({ slugs: [
          'react',
          'angular',
          'javascript',
          'node-dot-js',
          'typescript',
          'next-dot-js',
          'html5',
          'css3',
          'github',
          'vscode',
          'figma',
          'wordpress',
          'docker',
          'python',
          'java',
          'node-dot-js',
          'tailwindcss',
          'vercel',
          'stripe',
          'netlify',
          'google',
          'microsoft',
          'apple',
          'linux',
          'ubuntu',
          'windows',
          'macos',
          'chrome',
          'firefox',
          'edge',
          'safari',
          'opera',
          'telegram',
          'discord',
          'slack',
          'whatsapp',
          'instagram',
          'twitter',
          'youtube',
          'tiktok',
          'spotify',
          'soundcloud',
          'pinterest',
          'reddit',
          'linkedin',
          'facebook',
          'twitch',
          'tumblr',
          'snapchat',
          'vimeo',
          'dribbble',
          'behance',
        ]});
        const iconsArray = Object.values(fetchedIcons.simpleIcons);
        setIcons(iconsArray);
      } catch (error) {
        console.error("Failed to fetch icons:", error);
      }
    };

    loadIcons();
  }, []);

  // Memoize rendered icons for efficiency
  const renderedIcons = useMemo(() => {
    if (!icons.length) return null;

    return icons.map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [icons, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}

export default IconCloudComponent;
