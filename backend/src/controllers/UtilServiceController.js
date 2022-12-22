import pdf from "html-pdf";
import UtilService from "../service/UtilService.js";

class UtilServiceController {
    
    async generatePDF(req,res) {
        res.setHeader('Content-Length',999999)
        res.setHeader('Content-Type', 'application/pdf');

        var ARCHIVE_NAME = 'listaDeAlunos';
        var FILE_PATH = "./uploads/"
        var fullPath = `${FILE_PATH}${ARCHIVE_NAME}_${Date.now()}.pdf`
        
        const HTML_TO_PDF = await UtilService.generateanHTMLofStudentList();
        pdf.create(HTML_TO_PDF,{}).toFile(fullPath,
        (error,response) => {
            if(error) {
            console.log(error);
            return res.status(406).json({error:err});
            }
           
            return res.download(fullPath,function (err) {
                if(err) {
                    console.log(err)
                    return res.status(406).json({error:err});
                } else {
                    console.log("SUCESSO");
                    res.end();
                }
            })

            
        })
    }

}

export default new UtilServiceController();