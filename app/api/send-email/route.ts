import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // ⚠️ ЗАМЕНИ ПОЧТУ НА СВОЮ
    const toEmail = 'aripov.cr7@gmail.com';
    
    // Отправка письма через Resend или другой сервис
    // (нужно будет настроить email провайдера)
    
    // Пока просто логируем данные
    console.log('Получена заявка:', { name, email, phone });
    
    // Временное решение - возвращаем успех
    return NextResponse.json({ 
      success: true,
      message: 'Заявка получена (реальная отправка на почту скоро будет настроена)'
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}