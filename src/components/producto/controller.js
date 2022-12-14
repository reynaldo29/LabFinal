import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) => {
    try {
        
      const products = await prisma.producto.findMany();
      res.json({
        ok: true,
        data: products,
      });
    } catch (error) {
      res.json({
        ok: false,
        data: error.message,
      });
    }
  };

  export const create = async (req, res) => {
    try {
      const { body } = req;
      const product = await prisma.producto.create({
        data: {
          ...body,
        },
      });
      res.json({
        ok: true,
        data: product,
      });
    } catch (error) {
      res.json({
        ok: false,
        data: error.message,
      });
    }
  };

  export const update = async(req,res) =>{
    try{
        const productId = Number(req.params.id);
        const {imagen,name,categoria,precio} = req.body;
        const productUpdate = await prisma.producto.update({
            where:{
                id:productId
            },
            data:{
                imagen,name,categoria,precio
            }
        })
        res.json(productUpdate)
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        })
    }
}

export const remove = async(req,res) => {
    try{
        const { id } = req.params;
        const deleteProduct = await prisma.producto.delete({
            where:{
                id: Number(id)
            }
        })
        res.json({
            ok:true,
            data:"Producto eliminado"
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        })
    }
}