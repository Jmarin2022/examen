const {Router} = require('express')
const router = Router()

const { getEncuesta, postEncuesta,putEncuesta,patchEncuesta,deleteEncuesta } = require('../controller/encuesta')

router.get('/',getEncuesta)
router.post('/',postEncuesta)
router.put('/',putEncuesta)
router.patch('/',patchEncuesta)
router.delete('/',deleteEncuesta)



module.exports = router