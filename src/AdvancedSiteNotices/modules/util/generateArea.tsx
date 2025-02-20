import {
	CLASS_NAME,
	CLASS_NAME_DISMISS,
	CLASS_NAME_NOTICE,
	CLASS_NAME_NOTICE_CONTENT,
	CLASS_NAME_TITLE,
} from '../constant';
import React from 'ext.gadget.JSX';
import {getMessage} from '../i18n';

const generateArea = (): JQuery => {
	const area: React.ReactElement = (
		<div className={[CLASS_NAME, 'noprint']}>
			<div className={CLASS_NAME_TITLE}>{getMessage('Title')}</div>
			<div className={CLASS_NAME_NOTICE}>
				<div className={[CLASS_NAME_NOTICE_CONTENT, 'center']} />
			</div>
			<div className={CLASS_NAME_DISMISS}>
				<a role="button" aria-label={getMessage('Dismiss')} />
			</div>
		</div>
	);

	return $(area) as JQuery;
};

export {generateArea};
