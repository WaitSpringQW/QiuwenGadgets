const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Close: localize({
			en: 'Close',
			ja: '閉じる',
			'zh-hans': '关闭',
			'zh-hant': '關閉',
		}),
		Contents: localize({
			en: 'Contents',
			ja: '目次',
			zh: '目录',
		}),
		Collapse: localize({
			en: 'Collapse',
			ja: '折り畳み',
			'zh-hans': '折叠',
			'zh-hant': '摺叠',
		}),
		Expand: localize({
			en: 'Expand',
			ja: '展開',
			'zh-hans': '展开',
			'zh-hant': '展開',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};