let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`


*༺❁━━═════⊱𓆩☁️𓆪⊰═════━━❁༻*
*مرحبا بكم في بوت  اليونكو  شانكس  الخاص بمملكة كلاود العريقة اليك لائحة اوامر البوت:*
*┇☁️❯ .العاب*
*❐↞لطلب اوامر الألعاب مثل:*
*احزر,عين,كوره,دين...*
*┇☁️❯.التحويلات*
*❐↞لطلب اوامر التحويلات مثل:*
*ملصق,سرقه,لفيديو,جيف...*
*┇☁️❯.التنزيلات*
*❐↞لطلب اوامر التنزيلات مثل:*
*اغنيه,فيديو,انستا,فايس,تيك,بينترس...*
*┇☁️❯.جروبات*
*❐↞لطلب اوامر المجموعات مثل:*
*ترقيه,إعفاء,لينك,جروب_فتح/غلق...*
*┇☁️❯.الدعم*
*❐↞لطلب قائمة المساعدة مثل:*
*المطور,جروب الدعم,سكريبت,كود...*
*┇☁️❯.المستقبل*
*❐↞لطلب اوامر الذكاء الاصطناعي مثل:*
*بينغ,شاتgpt,شانكس...*
*┇☁️❯.لوغو*
*❐↞لطلب قائمة تصميم اللوجوهات بواسطة الذكاء الاصطناعي🌩️*
*༺❁━━═════⊱𓆩☁️𓆪⊰═════━━❁༻*
*✠ ~تــ✍︎ــوقــيــع ↯:~*
*『𝐂𝐋𝐎𝐔𝐃𓆩☁️𓆪𝐊𝐈𝐍𝐆𝐃𝐎𝐌』*`


await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/a2a1de6434ce22177b26b.mp4'
        },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['اوامر'] 
export default handler