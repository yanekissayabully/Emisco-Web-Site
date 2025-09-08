import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json({ error: 'Телеграм токены не настроены' }, { status: 500 });
    }

    const message = `
📋 Новая заявка
👤 Имя: ${name}
📧 Email: ${email}
📞 Телефон: ${phone}
🕒 Время: ${new Date().toLocaleString()}
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Ошибка отправки' }, { status: 500 });
  }
}
