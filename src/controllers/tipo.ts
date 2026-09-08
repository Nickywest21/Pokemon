import type { Request, Response } from "express";

export async function getPokemonTipo(req: Request, res: Response) {
    const { tipo } = req.params;

    const r = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);

    if (!r.ok) {
        return res.status(404).json({
            error: "No encontré ese tipo"
        });
    }

    const data = await r.json();

    res.json({
        tipo: data.name,
        pokemon: data.pokemon.map((p: any) => p.pokemon.name),
        estadisticas: data.stats.map((s: any) => s.stat.name),
        habilidades: data.abilities.map((a: any) => a.name)
    });
}