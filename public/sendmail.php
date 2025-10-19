<?php
// Разрешаем CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Отвечаем на preflight-запрос браузера
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Основная логика
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = htmlspecialchars($data['name'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? '');

    $siteName = "Emisco";
    $to = "Info@esm-technologie.ch";
    $subject = "Новая заявка с сайта $siteName";

    $body = "📋 Заявка с сайта: $siteName\n\n";
    $body .= "Имя: $name\n";
    $body .= "Email: $email\n";
    $body .= "Телефон: $phone\n";
    $body .= "Время: " . date("d.m.Y H:i:s") . "\n";

    $headers = "From: $siteName <no-reply@rings.kz>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['ok' => true, 'message' => 'Заявка успешно отправлена!']);
    } else {
        echo json_encode(['ok' => false, 'error' => 'Ошибка при отправке письма.']);
    }
    exit;
}

// Если не POST
http_response_code(405);
echo json_encode(['ok' => false, 'error' => 'Метод не разрешён']);
exit;
?>
