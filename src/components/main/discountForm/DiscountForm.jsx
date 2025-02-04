import { useForm} from 'react'
import styles from './DiscountForm.module.css'

export const DiscountForm = () => {
/**
 * ипортируем useState,для управления состоянием формы
 * создаем useState для хранения данный формы
 * formDate: содержит name,phone,email
 * setFormData для обновления состояния
 * formData обновляет handleChange когда пользователь вводит данные в поле
 * используем spread-оператор(...) для копирования текущего состояния и обновляем конкретное поле с e.target.name
 * e.preventDefault() предотвращет перезагрузку страницы
 * alert сообщает что скидка применена к имени введенному пользователем
 * section контейнер
 * h2 заголовок с текстом про скидку
 * form форма с onSubmit={handleSubmit} внутри которой будут инпуты
 * button добавили type="submit"для отправки формы
 */
    const {register,handleSubmit,formState: {error}} = useForm()

    const onSubmit = (data) => {
        console.log("Form submitted:",data)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>5% off on the first order</h2>
                <div className={styles.formContainer}>
                    <img src="https://s3-alpha-sig.figma.com/img/a3b6/9a2d/df1657885446d076034889d1f0f9f714?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=apuvF5l~EDfsXYUjnUD2KGJH2udRGXefsFjOvl~zMSt0oxAEgsuEDnDil8joy~aUXlZYFuo2RREKo7rjVpCoOe4hMy4DH~NzAP4qiQfsoggYTpCii9c5k2MEimwCjto-9UuPxAYpTy8i9rXli~P543EOEdg--LovGxotASlEh-SSIrItldGMOq5hSdlqqC4CX3iVfEwCrWQDeoXEKRC5v8k67Ededd-PV9bWO-CeHw6VUEH5XUwofNITxriTJFXCG1qLm6-Kh~Ceoui0Ryk4cZRdXgmy1X6lv2n4E7LWXgi9Z90GQL4xe2HGYo-fjpJl7bmbyoih011eZDtrWfsIMw__" alt='Flowers' className={styles.image}/>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder='Name'
                            {...register('Name', {requried: 'Name is required'})}
                        />
                        {error.name && <p className={styles.error}>{error.name.message}</p>}
                         <input
                            className={styles.input}
                            type='phone'
                            placeholder='Phone number'
                            {...register('Phone', {requried: 'Phone is required'})}
                        />
                            {error.phone && <p className={styles.error}>{error.phone.message}</p>}
                        <input
                            className={styles.input}
                            type='email'
                            placeholder='Email'
                            {...register('Email', {requried: 'Email is required'})}
                        />
                            {error.email && <p className={styles.error}>{error.email.message}</p>}
                        <button type='submit'>Get a discount</button>                        
                    </form>

                </div>
        </div>
    )
}
