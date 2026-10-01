// ==========================================
// CONEXÃO COM O SUPABASE
// ==========================================

const SUPABASE_URL = "https://eyxvayeaukvjuqayekch.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_VLI4uJG-UFaB_YPHlHA5JA_C5_-zxEw";

const banco = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);


// ==========================================
// ACESSAR TABELA: PROJETOS
// ==========================================

async function acessarProjetos() {

    const { data, error } = await banco
        .from("projetos")
        .select("*");

    if (error) {
        console.error("Erro ao acessar projetos:", error);
        return;
    }

    console.log("TABELA PROJETOS:");
    console.table(data);
}


// ==========================================
// ACESSAR TABELA: MENSAGENS_CONTATO
// ==========================================

async function acessarMensagens() {

    const { data, error } = await banco
        .from("mensagens_contato")
        .select("*");

    if (error) {
        console.error("Erro ao acessar mensagens:", error);
        return;
    }

    console.log("TABELA MENSAGENS_CONTATO:");
    console.table(data);
}


// ==========================================
// EXECUTAR
// ==========================================

acessarProjetos();
acessarMensagens();