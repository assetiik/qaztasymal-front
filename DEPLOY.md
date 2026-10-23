# Qaztasymal: Git и свой сервер

В архиве готовый статический сайт. Корневая папка сайта для Nginx — `dist/`.
Node.js, npm, PHP, Composer и база данных для этого лендинга не нужны.
Экспорт основан на опубликованном коммите `9e1ba65a5ff21a9fd6c71a1c52a454cf336122bc`.
В экспортной копии адрес в SEO-метаданных заменён на `https://qaztasymal.kz`.
Если нужен другой домен, измените этот адрес в тегах `canonical`, `og:url` и `og:image` в HTML-файлах.

## 1. На компьютере

Распакуйте ZIP. Создайте пустой репозиторий GitHub или GitLab без README и лицензии.
Следующий пример использует GitHub; замените YOUR_USERNAME своим логином.
Для SSH должен быть настроен доступ к аккаунту. Можно вместо SSH использовать HTTPS URL репозитория.

```bash
cd /путь/к/qaztasymal-landing
git init
git add .
git commit -m "Add Qaztasymal landing page"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/qaztasymal-landing.git
git push -u origin main
```

В Git добавляйте и `dist/`: здесь находятся готовые исходники, а не временные результаты сборки.

## 2. На сервере

Подключитесь по SSH. Git и Nginx должны быть установлены.
Выполните клонирование под пользователем развёртывания, имеющим право создавать папку в `/var/www`.
Для приватного репозитория этому пользователю нужен доступ к Git, например отдельный ключ развёртывания с правом чтения.
Папка `/var/www/qaztasymal-landing` перед первым клонированием должна отсутствовать или быть пустой.

```bash
git clone git@github.com:YOUR_USERNAME/qaztasymal-landing.git /var/www/qaztasymal-landing
```

## 3. Подключение Nginx

Публичная директория:

```text
/var/www/qaztasymal-landing/dist
```

Для отдельного домена или поддомена, обслуживающего только лендинг, основа блока `server` выглядит так:

```nginx
root /var/www/qaztasymal-landing/dist;
index index.html;

location / {
    try_files $uri $uri/ =404;
}
```

Это фрагмент, а не полный конфиг. `server_name`, HTTPS и сертификат нужно настроить для выбранного домена.
DNS этого домена должен вести на сервер. Пользователь Nginx должен иметь право читать файлы и проходить по родительским директориям.

Если `qaztasymal.kz` уже обслуживает Laravel/API, нельзя просто заменить его `root` или весь блок `server` этим фрагментом:
нужно сохранить текущие маршруты API, административной панели, хранилища и обработку PHP.
Сначала изучите действующий конфиг для домена и определите, какие URL отдать лендингу.
Перед изменением сохраните копию конфигурационного файла.

После внесения изменений в конфиг:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

Проверьте главную страницу, `/privacy/`, `/support/`, изображения, переключатель языка и ссылки на магазины приложений.
При размещении рядом с Laravel также проверьте существующие API и административную панель.

## 4. Следующие обновления

На компьютере после изменения файлов:

```bash
git add .
git commit -m "Update landing page"
git push origin main
```

На сервере под тем же пользователем, который клонировал репозиторий:

```bash
cd /var/www/qaztasymal-landing
git pull --ff-only origin main
```

Если изменились только HTML/CSS/JS/изображения, перезагрузка Nginx не нужна.
Если Git сообщает о локальных изменениях или расхождении веток, сначала разберите их; не используйте принудительный сброс вслепую.

## Файлы

- `dist/index.html` — главная страница.
- `dist/app.js` — интерактивность, казахский перевод и ссылки на приложения.
- `dist/styles.css` — оформление главной страницы.
- `dist/privacy/index.html` — политика конфиденциальности.
- `dist/support/index.html` — поддержка.
- `dist/privacy.html`, `dist/support.html` — дополнительные адреса тех же страниц.
- `dist/docs.css` — оформление документов.
- `dist/assets/` — изображения, логотип, QR-код и шрифты.

Пользовательское соглашение не включено: его текст не был предоставлен.

Документация: https://git-scm.com/docs/git-init, https://git-scm.com/docs/git-clone,
https://nginx.org/en/docs/beginners_guide.html
