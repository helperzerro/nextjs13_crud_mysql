import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req:NextRequest) => {
    const posts = await prisma.post.findMany({})
    return NextResponse.json({posts})
}

export const POST = async (req:NextRequest) => {
    const {title, content} = await req.json()
    const post = await prisma.post.create({
        data:{
            title, content
        }
    })
    // NextResponse.json({post}), disini kalau kita kasih response nilai post nanti bakal di tampilkan data keberapa terus isinya apa pada bagian network-post-preview. jadi sangat berbahaya sebaiknya di beri nilai kosong 

    return NextResponse.json({})
}

export const DELETE = async (req:NextRequest)=>{
    const url = new URL(req.url).searchParams
    // console.log(url) output URLSearchParams { 'id' => '8' }
    const id = Number(url.get('id')) || 0
    // console.log(id) output 8

    const post = await prisma.post.delete({
        where:{id:id}
    })

    if(!post){
        return NextResponse.json({message:"Error"},{status:505})
    }

    return NextResponse.json({})
}

export const PUT = async (req:NextRequest)=>{
    const {title, content, id} = await req.json()

    const post = await prisma.post.update({
        where:{id:Number(id)},
        data:{
            title, content
        }
    })

    return NextResponse.json({})
}

