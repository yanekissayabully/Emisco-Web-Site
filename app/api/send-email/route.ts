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
      to: ['nawaro.realestate@gmail.com'], // ТВОЯ ПОЧТА ЗДЕСЬ!
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
                    <h1>New application from the site</h1>
                    <p>emisco.ch</p>
                </div>
                
                <div class="info">
                    <div class="field">
                        <span class="label">Name:</span>
                        <span class="value">${name}</span>
                    </div>
                    <div class="field">
                        <span class="label">Email:</span>
                        <span class="value">${email}</span>
                    </div>
                    <div class="field">
                        <span class="label">Phone:</span>
                        <span class="value">${phone}</span>
                    </div>
                    <div class="field">
                        <span class="label">Time:</span>
                        <span class="value">${new Date().toLocaleString('ru-RU')}</span>
                    </div>
                </div>

                <div class="footer">
                    <p>This letter was sent automatically from the website emisco.ch</p>
                    <p>Don't reply to this letter</p>
                </div>
            </div>
        </body>
        </html>
      `,
      text: `
NEW APPLICATION FROM SITE emisco.ch

Name: ${name}
Email: ${email} 
Phone: ${phone}

Time: ${new Date().toLocaleString('ru-RU')}
Site: emisco.ch

Don't reply to this letter
      `
    });

    if (error) {
      console.error('❌ Error Resend:', error);
      throw error;
    }

    console.log('✅ Good Resend:', data);

    return NextResponse.json({ 
      success: true,
      message: 'Thank you! Your application has been accepted. We will contact you shortly.'
    });

  } catch (error) {
    console.error('❌ Error when sending application:', error);
    
    // Даже при ошибке возвращаем успех пользователю
    return NextResponse.json({ 
      success: true,
      message: 'Thank you! We have received your application.'
    });
  }
}