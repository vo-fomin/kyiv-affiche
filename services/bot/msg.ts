// tslint:disable: max-line-length
export const commandsText = `
/schedule [назва театру] - розклад вистав у певному театрі або у всіх
/theatres - перелік театрів та к-ть вистав у ньому
/actors (назва театру | назва вистави) - перелік акторів, які працюють у певному театрі або грають у певній виставі
/subscribe - підписатися на оновлення
/unsubscribe - відписатися від оновлень
/help - допомога
`;

export const adminCommandsText = `
/notify - надіслати підписаним користувачам повідомлення
/stats - статистика використання команд користувача
/logout - позбутись прав адміністратора
`;

export const helpMsg = `
Ви можете скористатися наступними командами:
${commandsText}
`;

export const helpAdminMsg = `
Ви можете скористатися наступними командами:
${commandsText}
${adminCommandsText}
`;

export const startMsg = `
Вітаємо! Цей бот містить інформацію про театри міста Києва та вистави, що в них відбуваються. Пропонуємо вам скористатися наступними командами:
${commandsText}
` + `\n\n Усі побажання та зауваження надсилайте на Telegram: @ansttss`;

export const sorryMsg = `
Вибачте, такої команди не існує. Пропонуємо вам скористатися наступними командами:
${commandsText}
`;

export const serviceErrMsg = `
Вибачте, але сервіс тимчасово недоступний
`;

export const cmdParamErr = `
Невірний параметр команди
`;

export const waitMsg = `
Хвилинку...
`;

export const loginedMsg = `
Ви успішно авторизовані у якості адміну!
`;

export const logoutMsg = `
Ви успішно вийшли з системи
`;

export const logoutErrMsg = `
Помилка виходу з системи
`;

export const subscribeMsg = `
Ви підписались на оновлення Тепер ви будете отримувати інформацію про нові фільми в кінотеатрі
`;

export const unsubscribeMsg = `
Ви відписались від оновлень. Підписку завжди можна відновити виконавши команду /subscribe
`;
// tslint:enable: max-line-length
