import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Отправка на твой PHP скрипт
    const phpResponse = await fetch('https://emisco.ch/php/sendmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject: 'Новая заявка с сайта emisco.ch',
        message: `Новая заявка с сайта emisco.ch\n\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}`
      })
    });

    const result = await phpResponse.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}