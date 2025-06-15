const TELEGRAM_SCRIPT_SRC = 'https://telegram.org/js/telegram-web-app.js'

const loadTelegramWebAppScript = () => {
	const { resolve, promise, reject } = Promise.withResolvers<globalThis.Telegram>()

	if (window.Telegram) return resolve(window.Telegram)

	const script = document.createElement('script')
	script.src = TELEGRAM_SCRIPT_SRC
	script.async = true
	script.addEventListener('load', () => resolve(window.Telegram))
	script.addEventListener('error', () =>
		reject(new Error('Failed to load Telegram Web App script')),
	)
	document.head.append(script)

	return promise
}

export const Telegram = await loadTelegramWebAppScript()
