export const CURRENT_VERSION = '0.59.0'

export const GITHUB_RELEASE_URL = 'https://github.com/houbb/monolith-landpage/releases'

export const DOWNLOAD = {
  windowsExe: `https://github.com/houbb/monolith-landpage/releases/download/v0.59.0/Monolith_0.59.0_x64-setup.exe`,
  windowsMsi: `https://github.com/houbb/monolith-landpage/releases/download/v0.59.0/Monolith_0.59.0_x64_en-US.msi`,
  platforms: [
    {
      platform: 'Windows',
      system: 'Windows 10+',
      formats: ['.exe', '.msi'] as const,
      description: 'download.windowsDesc',
      actionText: 'download.downloadNow',
      icon: 'monitor',
    },
    {
      platform: 'macOS',
      system: 'macOS 12+',
      formats: ['.dmg', '.zip'] as const,
      description: 'download.macosDesc',
      actionText: 'download.downloadNow',
      icon: 'laptop',
    },
    {
      platform: 'Linux',
      system: 'Ubuntu 20.04+',
      formats: ['.AppImage', '.deb', '.rpm'] as const,
      description: 'download.linuxDesc',
      actionText: 'download.downloadNow',
      icon: 'terminal',
    },
  ],
}
