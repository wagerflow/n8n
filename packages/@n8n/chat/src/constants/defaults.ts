import type { ChatOptions } from '@n8n/chat/types';

export const defaultOptions: ChatOptions = {
	webhookUrl: 'http://localhost:5678',
	webhookConfig: {
		method: 'POST',
		headers: {},
	},
	target: '#n8n-chat',
	mode: 'window',
	loadPreviousSession: true,
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	defaultLanguage: 'en',
	showWelcomeScreen: false,
	initialMessages: ['Hi there! 👋', 'My name is Betty. How can I assist you today?'],
	i18n: {
		en: {
			title: 'Introducing Betty',
			subtitle: "Your AI Assistant ",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Type your question..',
		},
	},
	theme: {},
};

export const defaultMountingTarget = '#n8n-chat';
