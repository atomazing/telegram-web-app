const TELEGRAM_SCRIPT_SRC = 'https://telegram.org/js/telegram-web-app.js'

let telegramInstance: typeof window.Telegram | undefined

const loadTelegramWebAppScript = (): Promise<typeof window.Telegram> => {
	return new Promise((resolve, reject) => {
		if (telegramInstance) return resolve(telegramInstance)
		if (typeof window.Telegram !== 'undefined') {
			telegramInstance = window.Telegram
			return resolve(telegramInstance)
		}

		const script = document.createElement('script')
		script.src = TELEGRAM_SCRIPT_SRC
		script.async = true
		script.onload = () => {
			telegramInstance = window.Telegram
			resolve(telegramInstance)
		}
		script.onerror = () => {
			reject(new Error('Failed to load Telegram Web App script'))
		}
		document.head.appendChild(script)
	})
}

export const loadTelegram = async (): Promise<typeof window.Telegram> => {
	if (telegramInstance) return telegramInstance
	return await loadTelegramWebAppScript()
}