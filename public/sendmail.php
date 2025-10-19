<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем JSON-тело запроса
    $data = json_decode(file_get_contents('php://input'), true);

    $name = htmlspecialchars($data['name'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? '');

    // Настройки
    $siteName = "Emisco";
    $to = "Info@esm-technologie.ch"; // ← твоя почта
    $subject = "Новая заявка с сайта $siteName";

    // Тело письма
    $body = "Заявка с сайта: $siteName\n\n";
    $body .= "Имя: $name\n";
    $body .= "Email: $email\n";
    $body .= "Телефон: $phone\n";
    $body .= "Время: " . date("d.m.Y H:i:s") . "\n";

    // Заголовки письма
    $headers = "From: $siteName <no-reply@rings.kz>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправка
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['ok' => true, 'message' => 'Заявка успешно отправлена!']);
    } else {
        echo json_encode(['ok' => false, 'error' => 'Ошибка при отправке письма.']);
    }
    exit;
}

echo json_encode(['ok' => false, 'error' => 'Неверный метод запроса.']);
exit;
?>
