export default {
  async fetch(request, env) {
    const cors = {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type"};
    if(request.method==="OPTIONS")  new ;
    await env.DB.prepare("CREATE TABLE  NOT EXISTS staff (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT, age TEXT, experience TEXT, address TEXT)").run();
    const url = new URL(request.url);
    if(url.pathname==="/api/kormi"){
      const h={...cors,"Content-Type":"application/json"};
      if(request.method==="GET"){const {results}=await env.DB.prepare("SELECT * FROM staff ORDER BY id DESC").all();return new Response(JSON.stringify(results),{headers:h});}
      if(request.method==="POST"){const d=await request.json();await env.DB.prepare("INSERT INTO staff (name, phone, age, experience, address) VALUES (?,?,?,?,?)").bind(d.name||'',d.phone||'',d.age||'',d.experience||'',d.address||'').run();return new Response(JSON.stringify({success:true}),{headers:h});}
    }
    const html = `<!DOCTYPE html><html lang="bn"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Prasenjit Shop - db</title><style>*ader{background:#111;color:#fff;paddi
 

 
