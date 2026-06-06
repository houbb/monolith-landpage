export const DOWNLOAD = {
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
