const commands = `
/start - Перезапустить бота
/help - Помощь
`
const text1 = `
Зайдите на сайт <a href="https://accounts.binance.com/ru/register?ref=205002977">binance.com</a>
Пройдите процедуру регистрации следуя указаниям на сайте.
Затем пройдите верификацию, прикрепив фотографию паспорта или водительских прав.
Внимание! На Binance можно завести только один счет!
/menu
`
const text2 = `
Двухфакторная аутентификация - это дополнительная гарантия Вашей безопастности.
Чтобы добавить двухфакторную аутентификацию Вам потребуется скачать на телефон приложение Google Authenticator или Binance Authenticator.
Открыть скаченное приложение и просканировать им qr-code. Также Binance покажет Вам цифровой код, его необходимо сохранить в надежном месте.
По данному коду можно будет востановить аутентификатор в случае смены телефона. Ни в коем случае не сообщайте данный код третьим лицам!
/menu
`
const text3 = `
Купить криптовалюту без комисcии можно через P2P сервис на Binance. 
Для этого нужно выбрать раздел P2P торговля в меню, выбрать способ оплаты (банк продавца, на карту которого вы будете переводить фиатные(обычные) деньги),
выбрать сумму и нажать кнопку КУПИТЬ.
В появившемся окне ввести сумму и нажмите КУПИТЬ С НУЛЕВОЙ КОМИССИЕЙ. После этого у вас появится номер банковской карты продавца.
Переводите на нее указанную Вами сумму и нажимаете кнопку подтверждения перевода. Продавец должен перевести вам криптовалюту в течение 15 минут.
/menu 
`
const text4 = `
Ключи API преднозначенны для безопасного подключения к Вашему счету из внешнего приложения. Введите имя ключа и нажмите СОЗДАТЬ. 
После этого скопируйте публичный и секретный ключи. 
Важно! После обновления страницы секретный ключ станен нечитаемым в целях безопасности. Обязательно скопируйте его сразу после создания!
В настройках ключа нужно поставить галочку напротив "разрешить спотовую торговлю".
/menu
`
const text5 = `
Binance Pay - это платежная система биржи Binance, которая позволяет быстро и без комиссий переводить криптовалюту между счетами на бирже.
В качестве адреса указывается Pay ID.
/menu
`

module.exports.commands = commands
module.exports.text1 = text1
module.exports.text2 = text2
module.exports.text3 = text3
module.exports.text4 = text4
module.exports.text5 = text5