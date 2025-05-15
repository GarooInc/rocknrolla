"use client"
import React from 'react'
import InputField from '../InputField/InputField'
import FileUpload from '../FileUpload/FileUpload'
import RadioGroupButtons from '../RadioGroupButtons/RadioGroupButtons'
import LineTitle from '../LineTitle/LineTitle'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import SelectField from '../SelectField/SelectField'
import nationalities_en from '@/public/data/nationalities_en'
import nationalities_es from '@/public/data/nationalities_es'
import municipiosDeGuatemala from '@/public/data/municipios'

import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-4 w-full md:w-1/2 justify-center items-center'>
            <LineTitle text={t('jobs:application')} secondary />
            <div className='inputtype'>
                <span className='labelform'>{t('jobs:date_input')}</span>
                <CustomDatePicker />                        
            </div>
            <InputField label={t('jobs:job_input')} name="full_name" required />
            <div className='inputtype'>
                <span className='labelform'>{t('jobs:typejob_input')}</span>
                <div className='flex gap-2'>
                    <RadioGroupButtons
                        name="typejob"
                        options={[
                            { label: t('jobs:typecontract1'), value: t('jobs:typecontract1') },
                            { label: t('jobs:typecontract2'), value: t('jobs:typecontract2') },
                        ]}
                        selected="fulltime"
                    />
                </div>
                <FileUpload label={t('jobs:pic_input')} name="pic" required />
            </div>
            <div className='pt-10 w-full'>
                <LineTitle text={t('jobs:application')} secondary />
                <div className='flex flex-col gap-2 w-full pt-10'>
                    <InputField label={t('jobs:name_input')} name="full_name" required />
                    <div className='inputtype'>
                        <span className='labelform'>{t('jobs:datebirth_input')}</span>
                        <CustomDatePicker />                        
                    </div>
                    <SelectField label={t('nationality_input')} name="nationality" required
                    options={
                        t('general:locale') === 'es' ? nationalities_es : nationalities_en
                    }
                    />
                    <InputField label={t('jobs:country_input')} name="country" required />
                    {/* <SelectField label={t('jobs:municipality_input')} name="municipality" required
                    options={
                        municipiosDeGuatemala.map((municipio) => ({
                            value: municipio,
                            label: municipio,
                        }))
                    }
                    /> */}
                    <InputField label={t('jobs:address_input')} name="address" required />
                    <InputField label={t('jobs:tel_input')} name="phone" required />
                    <InputField label={t('jobs:mail_input')} name="email" type="email" required />
                    <span className='labelform'>{t('jobs:civil_input')}</span>
                    <div className='flex gap-2'>
                        <RadioGroupButtons
                            name="typejob"
                            options={[
                                { label: t('jobs:civil1'), value: t('jobs:civil1') },
                                { label: t('jobs:civil2'), value: t('jobs:civil2') },
                                { label: t('jobs:civil3'), value: t('jobs:civil3') },
                            ]}
                            selected="fulltime"
                        />
                    </div>
                </div>
                <div className='pt-10 w-full'>
                    <LineTitle text={t('jobs:education')} secondary />
                    <div className='flex flex-col gap-2 w-full'>
                        <SelectField label={t('jobs:education_input')} name="level" required
                        options={
                            t('general:locale') === 'es' ? [
                                'primaria',
                                'secundaria',
                                'universidad',
                                'postgrado',
                            ] : [
                                'primary',
                                'secondary',
                                'university',
                                'postgraduate',
                            ]
                        }
                        />
                        <InputField label={t('jobs:institution_input')} name="school" required />
                        <div className='flex flex-col py-2 w-full'>
                            <span className='labelform'>{t('jobs:period_input')}</span>
                            <div className='flex gap-2 w-full'>
                                <InputField type='date' name="period1" required />
                                <InputField type='date' name="period2" required />
                            </div>
                        </div>
                        <InputField label={t('jobs:titlegrad_input')} name="degree" required />
                        <button className='italic text-black py-2'>
                            {t('jobs:more_education')} +
                        </button>
                    </div>
                </div>
                <div className='pt-10 w-full'>
                    <LineTitle text={t('jobs:laboral_experience')} secondary />
                    <div className='flex flex-col gap-2 w-full'>
                        <InputField label={t('jobs:nameenterprise_input')} name="enterprise" required />
                        <InputField label={t('jobs:addressenterprise_input')} name="address" required />
                        <InputField label={t('jobs:telenterprise_input')} name="phone" required />
                    </div>
                    <div className='flex flex-col gap-2 w-full pt-2'>
                        <span className='labelform'>{t('jobs:datestart_input')}</span>
                        <InputField type='date' name="period1" required />
                    </div>
                    <div className='flex flex-col gap-2 w-full py-2'>
                        <span className='labelform'>{t('jobs:datefinish_input')}</span>
                        <InputField type='date' name="period2" required />
                    </div>
                    <InputField label={t('jobs:boss_input')} name="position" required />
                    <InputField label={t('jobs:worktype_input')} name="position" required />
                    <div className='flex gap-2 w-full'>
                        <InputField label={t('jobs:salary_input')} name="salary" required />
                        <InputField label={t('jobs:lastsalary_input')} name="salary" required />
                    </div>
                    <InputField label={t('jobs:functions_input')} name="reason" required />
                    <span className='labelform'>{t('jobs:references_input')}</span>
                    <div className='flex gap-2'>
                        <RadioGroupButtons
                            name="typejob"
                            options={[
                                { label: t('general:locale') === 'es' ? 'Si' : 'Yes', value: 'yes' },
                                { label: t('general:locale') === 'es' ? 'No' : 'No', value: 'no' },
                            ]}
                            selected="fulltime"
                        />
                    </div>
                    <InputField label={t('jobs:dismiss_input')} name="enterprise" required />
                    <button className='italic text-black py-2 w-full'>
                        {t('jobs:work_type')} +
                    </button>
                </div>


            </div>
        </div>
    )
}

export default ContactForm