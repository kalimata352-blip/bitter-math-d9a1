export default {
  async fetch(request, env) {
    const cors = {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, DELETE, OPTIONS","Access-Control-Allow-Headers":"Content-Type"};
    if(request.method==="OPTIONS") return new Response(null,{headers:cors});
    const url = new URL(request.url);
    try{
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, image TEXT)").run();
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS staff (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT, age TEXT, experience TEXT, address TEXT)").run();
    }catch(e){}
    if(url.pathname==="/api/products"){
      if(request.method==="GET"){
        const {results}=await env.DB.prepare("SELECT * FROM products ORDER BY id DESC").all();
        return new Response(JSON.stringify(results),{headers:{...cors,"Content-Type":"application/json"}});
      }
      if(request.method==="POST"){
        const b=await request.json();
        await env.DB.prepare("INSERT INTO products (name, price, image) VALUES (?,?,?)").bind(b.name,b.price,b.image||"").run();
        return new Response(JSON.stringify({success:true}),{headers:{...cors,"Content-Type":"application/json"}});
      }
    }
    if(url.pathname.startsWith("/api/products/") && request.method==="DELETE"){
      const id=url.pathname.split("/").pop();
      await env.DB.prepare("DELETE FROM products WHERE id=?").bind(id).run();
      return new Response(JSON.stringify({success:true}),{headers:cors});
    }
    if(url.pathname==="/api/kormi"){
      if(request.method==="GET"){
        const {results}=await env.DB.prepare("SELECT * FROM staff ORDER BY id DESC").all();
        return new Response(JSON.stringify(results),{headers:{...cors,"Content-Type":"application/json"}});
      }
      if(request.method==="POST"){
        const b=await request.json();
        await env.DB.prepare("INSERT INTO staff (name, phone, age, experience, address) VALUES (?,?,?,?,?)").bind(b.name,b.phone,b.age,b.experience,b.address).run();
        return new Response(JSON.stringify({success:true}),{headers:{...cors,"Content-Type":"application/json"}});
      }
    }
    return new Response(JSON.stringify({ok:true}),{headers:{...cors,"Content-Type":"application/json"}});
  }
}
