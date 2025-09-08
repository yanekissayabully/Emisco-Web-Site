// 'use client';

// import { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// interface TelegramModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const TelegramModal = ({ isOpen, onClose }: TelegramModalProps) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   // Валидационная схема
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, 'Имя должно содержать минимум 2 символа')
//       .required('Обязательное поле'),
//     email: Yup.string()
//       .email('Некорректный email')
//       .required('Обязательное поле'),
//     phone: Yup.string()
//       .min(10, 'Некорректный номер телефона')
//       .required('Обязательное поле')
//   });

//   // Обработчик формы
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: ''
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       setSubmitStatus('idle');
      
//       try {
//         // Отправка данных в Telegram
//         const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
//         const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        
//         const message = `
//           📋 Новая заявка!
//           👤 Имя: ${values.name}
//           📧 Email: ${values.email}
//           📞 Телефон: ${values.phone}
//           🕒 Время: ${new Date().toLocaleString()}
//         `;

//         await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//           chat_id: chatId,
//           text: message,
//           parse_mode: 'HTML'
//         });

//         setSubmitStatus('success');
//         setTimeout(() => {
//           onClose();
//           formik.resetForm();
//           setSubmitStatus('idle');
//         }, 2000);
//       } catch (error) {
//         console.error('Ошибка отправки:', error);
//         setSubmitStatus('error');
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   });

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in zoom-in-95 duration-300">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold text-gray-900">Оставить заявку</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               ✕
//             </button>
//           </div>

//           <form onSubmit={formik.handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Имя *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="Ваше имя"
//               />
//               {formik.touched.name && formik.errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="your@email.com"
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                 Телефон *
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formik.values.phone}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="+7 (999) 999-99-99"
//               />
//               {formik.touched.phone && formik.errors.phone && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
//               )}
//             </div>

//             <div className="flex gap-3 pt-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
//               >
//                 Отмена
//               </button>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
//               >
//                 {isSubmitting ? 'Отправка...' : 'Отправить'}
//               </button>
//             </div>
//           </form>

//           {/* Сообщения о статусе */}
//           {submitStatus === 'success' && (
//             <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
//               ✅ Заявка успешно отправлена!
//             </div>
//           )}
//           {submitStatus === 'error' && (
//             <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
//               ❌ Ошибка отправки. Попробуйте еще раз.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TelegramModal;











// 'use client';

// import { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useI18n } from "@/providers/i18n-providers"

// interface TelegramModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const TelegramModal = ({ isOpen, onClose }: TelegramModalProps) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const { t } = useI18n();
//   // Валидационная схема
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, 'Имя должно содержать минимум 2 символа')
//       .required('Обязательное поле'),
//     email: Yup.string()
//       .email('Некорректный email')
//       .required('Обязательное поле'),
//     phone: Yup.string()
//       .min(10, 'Некорректный номер телефона')
//       .required('Обязательное поле')
//   });

//   // Форматирование телефона
//   const formatPhone = (value: string) => {
//     const numbers = value.replace(/\D/g, '');
//     if (numbers.length <= 1) return numbers;
//     if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
//     if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
//     if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}`;
//     return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
//   };

//   // Обработчик формы
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: ''
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       setSubmitStatus('idle');
      
//       try {
//         // Отправка данных в Telegram
//         const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
//         const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        
//         const message = `
//           📋 Новая заявка!
//           👤 Имя: ${values.name}
//           📧 Email: ${values.email}
//           📞 Телефон: ${values.phone}
//           🕒 Время: ${new Date().toLocaleString()}
//         `;

//         await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//           chat_id: chatId,
//           text: message,
//           parse_mode: 'HTML'
//         });

//         setSubmitStatus('success');
//         setTimeout(() => {
//           onClose();
//           formik.resetForm();
//           setSubmitStatus('idle');
//         }, 2000);
//       } catch (error) {
//         console.error('Ошибка отправки:', error);
//         setSubmitStatus('error');
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   });

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in zoom-in-95 duration-300">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold text-gray-900">Оставить заявку</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               ✕
//             </button>
//           </div>

//           <form onSubmit={formik.handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Имя *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="Ваше имя"
//               />
//               {formik.touched.name && formik.errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="your@email.com"
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                 Телефон *
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formik.values.phone}
//                 onChange={(e) => {
//                   const formatted = formatPhone(e.target.value);
//                   formik.setFieldValue('phone', formatted);
//                 }}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="+7 (999) 999-99-99"
//               />
//               {formik.touched.phone && formik.errors.phone && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
//               )}
//             </div>

//             <div className="flex gap-3 pt-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
//               >
//                 Отмена
//               </button>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
//               >
//                 {isSubmitting ? 'Отправка...' : 'Отправить'}
//               </button>
//             </div>
//           </form>

//           {/* Сообщения о статусе */}
//           {submitStatus === 'success' && (
//             <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
//               ✅ Заявка успешно отправлена!
//             </div>
//           )}
//           {submitStatus === 'error' && (
//             <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
//               ❌ Ошибка отправки. Попробуйте еще раз.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TelegramModal;





// 'use client';

// import { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useI18n } from "@/providers/i18n-providers"

// interface TelegramModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const TelegramModal = ({ isOpen, onClose }: TelegramModalProps) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const { t } = useI18n();

//   // Валидационная схема
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, t('nameMinError'))
//       .required(t('requiredField')),
//     email: Yup.string()
//       .email(t('emailError'))
//       .required(t('requiredField')),
//     phone: Yup.string()
//       .min(10, t('phoneError'))
//       .required(t('requiredField'))
//   });

//   // Форматирование телефона
//   const formatPhone = (value: string) => {
//     const numbers = value.replace(/\D/g, '');
//     if (numbers.length <= 1) return numbers;
//     if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
//     if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
//     if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}`;
//     return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
//   };

//   // Обработчик формы
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: ''
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       setSubmitStatus('idle');
      
//       try {
//         // Отправка данных в Telegram
//         const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
//         const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        
//         const message = `
//           📋 ${t('newRequest') || 'Новая заявка!'}
//           👤 ${t('nameField') || 'Имя'}: ${values.name}
//           📧 ${t('emailField') || 'Email'}: ${values.email}
//           📞 ${t('phoneField') || 'Телефон'}: ${values.phone}
//           🕒 ${t('timeField') || 'Время'}: ${new Date().toLocaleString()}
//         `;

//         await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//           chat_id: chatId,
//           text: message,
//           parse_mode: 'HTML'
//         });

//         setSubmitStatus('success');
//         setTimeout(() => {
//           onClose();
//           formik.resetForm();
//           setSubmitStatus('idle');
//         }, 2000);
//       } catch (error) {
//         console.error('Ошибка отправки:', error);
//         setSubmitStatus('error');
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   });

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in zoom-in-95 duration-300">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold text-gray-900">
//               {t('submitRequest2')}
//             </h3>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               ✕
//             </button>
//           </div>

//           <form onSubmit={formik.handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 {t('nameField')} *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder={t('namePlaceholder')}
//               />
//               {formik.touched.name && formik.errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 {t('emailField')} *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder={t('emailPlaceholder')}
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                 {t('phoneField')} *
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formik.values.phone}
//                 onChange={(e) => {
//                   const formatted = formatPhone(e.target.value);
//                   formik.setFieldValue('phone', formatted);
//                 }}
//                 onBlur={formik.handleBlur}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder={t('phonePlaceholder')}
//               />
//               {formik.touched.phone && formik.errors.phone && (
//                 <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
//               )}
//             </div>

//             <div className="flex gap-3 pt-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
//               >
//                 {t('cancelButton')}
//               </button>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
//               >
//                 {isSubmitting ? (t('submitting')) : (t('sendButton'))}
//               </button>
//             </div>
//           </form>

//           {/* Сообщения о статусе */}
//           {submitStatus === 'success' && (
//             <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
//               ✅ {t('submitSuccess')}
//             </div>
//           )}
//           {submitStatus === 'error' && (
//             <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
//               ❌ {t('submitError')}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TelegramModal;







'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useI18n } from "@/providers/i18n-providers"

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TelegramModal = ({ isOpen, onClose }: TelegramModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useI18n();

  // Валидационная схема
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t('nameMinError'))
      .required(t('requiredField')),
    email: Yup.string()
      .email(t('emailError'))
      .required(t('requiredField')),
    phone: Yup.string()
      .min(10, t('phoneError'))
      .required(t('requiredField'))
  });

  // Форматирование телефона
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 1) return numbers;
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}`;
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
  };

  // Обработчик формы
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      
      try {
        // Отправка данных в Telegram
        const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
        const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        
        const message = `
          📋 ${t('newRequest') || 'Новая заявка!'}
          👤 ${t('nameField') || 'Имя'}: ${values.name}
          📧 ${t('emailField') || 'Email'}: ${values.email}
          📞 ${t('phoneField') || 'Телефон'}: ${values.phone}
          🕒 ${t('timeField') || 'Время'}: ${new Date().toLocaleString()}
        `;

        await axios.post('/api/sendMessage', {
  name: values.name,
  email: values.email,
  phone: values.phone,
});


        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          formik.resetForm();
          setSubmitStatus('idle');
        }, 2000);
      } catch (error) {
        console.error('Ошибка отправки:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in zoom-in-95 duration-300">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              {t('submitRequest2')}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('nameField')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={t('namePlaceholder')}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('emailField')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={t('emailPlaceholder')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t('phoneField')} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={(e) => {
                  const formatted = formatPhone(e.target.value);
                  formik.setFieldValue('phone', formatted);
                }}
                onBlur={formik.handleBlur}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={t('phonePlaceholder')}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                {t('cancelButton')}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (t('submitting')) : (t('sendButton'))}
              </button>
            </div>
          </form>

          {/* Сообщения о статусе */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
              ✅ {t('submitSuccess')}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              ❌ {t('submitError')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TelegramModal;