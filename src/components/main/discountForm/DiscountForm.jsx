import { useForm} from 'react-hook-form'
import styles from './DiscountForm.module.css'

export const DiscountForm = () => {
/** 
 * деструктуризация формы:register- связывает поля формы с recat-hook-form , handleSubmit- обрабатывает отправку формы, formState.errors- объект с ошибками валидации
 * onSubmit: получает данные формы и выводит их в консоль
 * div с классом container основной блок формы
 * h2 заголовок формы сообщающий о 5% скидке
 * div с классом formContainer обертка для формы
 * img добавление изображения по https адресу
 * form  с обработчиком onSubmit 
 * required обязательное поле
 * errors. вывод ошибки если поле пустое
 * button кнопка для отправки формы
*/
    const {register,handleSubmit,formState: {errors}} = useForm({})

    const onSubmit = (data) => {
        console.log("Form submitted:",data)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>5% off on the first order</h2>
                <div className={styles.formContainer}>
                    <img src="https://s3-alpha-sig.figma.com/img/a3b6/9a2d/df1657885446d076034889d1f0f9f714?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=apuvF5l~EDfsXYUjnUD2KGJH2udRGXefsFjOvl~zMSt0oxAEgsuEDnDil8joy~aUXlZYFuo2RREKo7rjVpCoOe4hMy4DH~NzAP4qiQfsoggYTpCii9c5k2MEimwCjto-9UuPxAYpTy8i9rXli~P543EOEdg--LovGxotASlEh-SSIrItldGMOq5hSdlqqC4CX3iVfEwCrWQDeoXEKRC5v8k67Ededd-PV9bWO-CeHw6VUEH5XUwofNITxriTJFXCG1qLm6-Kh~Ceoui0Ryk4cZRdXgmy1X6lv2n4E7LWXgi9Z90GQL4xe2HGYo-fjpJl7bmbyoih011eZDtrWfsIMw__" 
                    alt='Flowers' 
                    className={styles.image}/>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder='Name'
                            // {...register('name', {required: 'Name is required'})}
                        />
                        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                         <input
                            className={styles.input}
                            type='tel'
                            placeholder='Phone number'
                            // {...register('phone', {required: 'Phone is required'})}
                        />
                            {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                        <input
                            className={styles.input}
                            type='email'
                            placeholder='Email'
                            // {...register('email', {required: 'Email is required'})}
                        />
                            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                        <button type='submit' className={styles.button}>Get a discount</button>                        
                    </form>

                </div>
        </div>
    )
}
