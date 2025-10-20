<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    
    // ⚠️⚠️⚠️ ЗАМЕНИ ЭТУ ПОЧТУ НА СВОЮ ⚠️⚠️⚠️
    $to = 'aripov.cr7@gmail.com'; // СЮДА БУДУТ ПРИХОДИТЬ ЗАЯВКИ
    
    $subject = 'Новая заявка с сайта emisco.ch';
    
    $message = "
Новая заявка с сайта emisco.ch

Имя: $name
Email: $email
Телефон: $phone

Время: " . date('d.m.Y H:i') . "
    ";
    
    $headers = "From: noreply@emisco.ch\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Ошибка отправки почты']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Метод не разрешен']);
}
?>