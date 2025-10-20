// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // 1. Логируем в консоль
    console.log('🚀 НОВАЯ ЗАЯВКА:');
    console.log('👤 Имя:', name);
    console.log('📧 Email:', email);
    console.log('📞 Телефон:', phone);
    console.log('⏰ Время:', new Date().toLocaleString('ru-RU'));

    // 2. Отправляем письмо через Resend
    const { data, error } = await resend.emails.send({
      from: 'Emisco.ch <onboarding@resend.dev>', // Можно настроить свой домен потом
      to: ['aripov.cr7@gmail.com'], // ТВОЯ ПОЧТА ЗДЕСЬ!
      subject: `🎯 Новая заявка с сайта: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
                .container { max-width: 600px; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
                .info { margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; }
                .field { margin: 10px 0; }
                .label { font-weight: bold; color: #333; }
                .value { color: #666; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎯 Новая заявка с сайта</h1>
                    <p>emisco.ch</p>
                </div>
                
                <div class="info">
                    <div class="field">
                        <span class="label">👤 Имя:</span>
                        <span class="value">${name}</span>
                    </div>
                    <div class="field">
                        <span class="label">📧 Email:</span>
                        <span class="value">${email}</span>
                    </div>
                    <div class="field">
                        <span class="label">📞 Телефон:</span>
                        <span class="value">${phone}</span>
                    </div>
                    <div class="field">
                        <span class="label">⏰ Время отправки:</span>
                        <span class="value">${new Date().toLocaleString('ru-RU')}</span>
                    </div>
                </div>

                <div class="footer">
                    <p>📧 Это письмо отправлено автоматически с сайта emisco.ch</p>
                    <p>Не отвечайте на это письмо</p>
                </div>
            </div>
        </body>
        </html>
      `,
      text: `
🎯 НОВАЯ ЗАЯВКА С САЙТА emisco.ch

👤 Имя: ${name}
📧 Email: ${email} 
📞 Телефон: ${phone}

⏰ Время отправки: ${new Date().toLocaleString('ru-RU')}
🌐 Сайт: emisco.ch

Не отвечайте на это письмо
      `
    });

    if (error) {
      console.error('❌ Ошибка Resend:', error);
      throw error;
    }

    console.log('✅ Письмо отправлено через Resend:', data);

    return NextResponse.json({ 
      success: true,
      message: 'Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.'
    });

  } catch (error) {
    console.error('❌ Ошибка при отправке заявки:', error);
    
    // Даже при ошибке возвращаем успех пользователю
    return NextResponse.json({ 
      success: true,
      message: 'Спасибо! Мы получили вашу заявку.'
    });
  }
}