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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import municipiosGuate from '@/public/data/municipios'
import { useArrayField } from '@/hooks/useArrayField';


const ContactForm = () => {
    const { t } = useTranslation();

    const [applicationDate, setApplicationDate] = useState(null);
    const [jobPosition, setJobPosition] = useState('');
    const [contractType, setContractType] = useState('');

    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [nationality, setNationality] = useState('');
    const [country, setCountry] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [civilStatus, setCivilStatus] = useState('');

    const [currentlyWorking, setCurrentlyWorking] = useState('');
    const [workAvailability, setWorkAvailability] = useState('');
    const [salaryExpectation, setSalaryExpectation] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [hasFamilyInCompany, setHasFamilyInCompany] = useState('');
    const [familyDetails, setFamilyDetails] = useState('');
    const [observations, setObservations] = useState('');

    const [termsAcceptedName, setTermsAcceptedName] = useState('');

    const [termsAccepted, setTermsAccepted] = useState(false);

    const [cvFile, setCvFile] = useState('null');
    const [certFile, setCertFile] = useState('null');

    const [educationreceived, updateEducationField, addEducation] = useArrayField([
        { level: '', school: '', period1: '', period2: '', title: '' },
      ]);
    
      const [workexperience, updateWorkField, addWorkExperience] = useArrayField([
        {
          enterprise: '', address: '', phone: '', period1: '', period2: '',
          boss: '', jobtype: '', position: '', salary: '', lastsalary: '',
          functions: '', referencesAllowed: '', dismissReason: ''
        },
      ]);
    
      const [laboralreferences, updateReferenceField, addLaboralReference] = useArrayField([
        { name: '', job: '', company: '', phone: '' },
      ]);  
      
      const [personalreferences, updatePersonalReferenceField, addPersonalReference] = useArrayField([
        { name: '', relationship: '', phone: '' },
      ]);

    const handleSubmit = async () => {
        const formData = {
            fecha: applicationDate,
            puesto_solicitud: jobPosition,
            tipo_contratacion: contractType,
            fotografia: '',
            nombre_completo: fullName,
            fecha_nacimiento: birthDate,
            nacionalidad: nationality,
            pais_residencia: country,
            municipio: municipality,
            direccion: address,
            telefono: phone,
            email,
            estado_civil: civilStatus,
            educacion: educationreceived,
            experiencia: workexperience,
            referencias_laborales: laboralreferences,
            referencias_personales: personalreferences,
            trabajando_actualmente: currentlyWorking,
            disponibilidad_laboral: workAvailability,
            pretencion_salarial: salaryExpectation,
            recomendacion: recommendation,
            familiares_empresa: hasFamilyInCompany,
            detalles_familiar: familyDetails,
            observaciones: observations,
            tyc: termsAcceptedName,
            tyc_val: termsAccepted,
            cv: cvFile,
            file_of_work: certFile,
        };
    
        console.log('Data a enviar:', formData);
    
    //     try {
    //         const response = await fetch('/api/submit', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData)
    //         });
    
    //         if (!response.ok) throw new Error('Error al enviar datos');
    //         const result = await response.json();
    //         console.log('Éxito:', result);
    //     } catch (err) {
    //         console.error(err);
    //     }
    };    
    

    return (
        <div className='flex flex-col gap-4 w-full md:w-1/2 justify-center items-center'>
            {/* Solicitud de trabajo  */}
            <div className='w-full gap-4 flex flex-col'>
                <LineTitle text={t('jobs:application')} secondary form/>
                <div className='inputtype'>
                    <span className='labelform'>{t('jobs:date_input')}</span>
                    <CustomDatePicker onChange={(date) => setApplicationDate(date)} />                     
                </div>
                <InputField 
                    label={t('jobs:job_input')} 
                    name="jobposition" 
                    required  
                    value={jobPosition}
                    onChange={(e) => setJobPosition(e.target.value)}
                />
                <div className='inputtype'>
                    <span className='labelform'>{t('jobs:typejob_input')}</span>
                    <div className='flex gap-2'>
                        <RadioGroupButtons
                            name="typejob"
                            options={[
                                { label: t('jobs:typecontract1'), value: t('jobs:typecontract1') },
                                { label: t('jobs:typecontract2'), value: t('jobs:typecontract2') },
                            ]}
                            selected={contractType}
                            onChange={(value) => setContractType(value)}
                        />
                    </div>
                    <FileUpload label={t('jobs:pic_input')} name="pic" required />
                </div>
            </div>
            <div className='pt-4 w-full gap-4 flex flex-col'>
                {/* Solicitud de trabajo 2 */}
                <LineTitle text={t('jobs:application')} secondary form/>
                <div className='flex flex-col gap-2 w-full'>
                    <InputField 
                    label={t('jobs:name_input')} 
                    name="name"
                    required 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)} 
                    />
                    <div className='inputtype'>
                        <span className='labelform'>{t('jobs:datebirth_input')}</span>
                        <CustomDatePicker onChange={(date) => setBirthDate(date)} />                      
                    </div>
                    <SelectField label={t('nationality_input')} name="nationality" required
                    options={
                        t('general:locale') === 'es' ? nationalities_es : nationalities_en
                    }
                    onChange={(e) => setNationality(e.target.value)}
                    />
                    <InputField label={t('jobs:country_input')} name="country" required onChange={(e) => setCountry(e.target.value)} />
                    <SelectField label={t('jobs:municipio_input')} name="municipality" required
                    options={
                        municipiosGuate
                    }
                    onChange={(e) => setMunicipality(e.target.value)}
                    />
                    <InputField 
                    label={t('jobs:address_input')} 
                    name="address" 
                    required 
                    onChange={(e) => setAddress(e.target.value)}
                    />
                    <InputField 
                    label={t('jobs:tel_input')} 
                    name="phone" 
                    required 
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    <InputField 
                    label={t('jobs:mail_input')} 
                    name="email" 
                    type="email" 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className='labelform'>{t('jobs:civil_input')}</span>
                    <div className='flex gap-2'>
                        <RadioGroupButtons
                            name="civil"
                            options={[
                                { label: t('jobs:civil1'), value: t('jobs:civil1') },
                                { label: t('jobs:civil2'), value: t('jobs:civil2') },
                                { label: t('jobs:civil3'), value: t('jobs:civil3') },
                            ]}
                            selected={civilStatus}
                            onChange={(value) => setCivilStatus(value)}
                        />
                    </div>
                </div>
            </div>
            {/* Educación recibida */}
                <div className='pt-4 w-full gap-4 flex flex-col'>
                    <LineTitle text={t('jobs:education')} secondary form/>
                    <div className='flex flex-col gap-2 w-full '>
                    {educationreceived.map((education, index) => (
                        <div key={index} className='flex flex-col gap-2 w-full'>
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
                            value={education.level}
                            onChange={(value) => updateEducationField(index, 'level', value)}
                            />
                            <InputField
                            label={t('jobs:institution_input')}
                            name="school"
                            required
                            value={education.school}
                            onChange={(e) => updateEducationField(index, 'school', e.target.value)}
                            />
                            <div className='flex flex-col py-2 w-full'>
                                <span className='labelform w-full'>{t('jobs:period_input')}</span>
                                    <div className='flex flex-col gap-2 w-full pt-2'>
                                        <span className='labelformlower w-full'>{t('jobs:period_input1')}</span>
                                        <CustomDatePicker 
                                        name="period1" 
                                        required 
                                        value={education.period1 }
                                        onChange={(value) => updateEducationField(index, 'period1', value)}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 w-full py-2'>
                                        <span className='labelformlower w-full'>{t('jobs:period_input2')}</span>
                                        <CustomDatePicker 
                                        name="period2" 
                                        required 
                                        value={education.period2}
                                        onChange={(value) => updateEducationField(index, 'period2', value)}
                                        />
                                    </div>
                            </div>
                            <InputField
                            label={t('jobs:titlegrad_input')}
                            name="degree"
                            required
                            value={education.title}
                            onChange={(e) => updateEducationField(index, 'title', e.target.value)}
                            />
                        </div>
                    ))}
                        <button className='italic text-black py-2' onClick={() => addEducation()} >
                            {t('jobs:more_education')} +
                        </button>
                    </div>
                </div>
                {/* Experiencia laboral */}
                 <div className='pt-4 w-full gap-4 flex flex-col'>
                    <LineTitle text={t('jobs:laboral_experience')} secondary form/>
                    {workexperience.map((work, index) => (
                        <div key={index} className='flex flex-col gap-2 w-full'>
                            <div className='flex flex-col gap-2 w-full'>
                                <InputField 
                                label={t('jobs:nameenterprise_input')} 
                                name="enterprise" 
                                value={work.enterprise}
                                required 
                                onChange={(e) => updateWorkField(index, 'enterprise', e.target.value)}
                                />
                                <InputField 
                                label={t('jobs:addressenterprise_input')} 
                                name="address" required 
                                value={work.address}
                                onChange={(e) => updateWorkField(index, 'address', e.target.value)}
                                />
                                <InputField 
                                label={t('jobs:telenterprise_input')} 
                                name="phone" 
                                required 
                                value={work.phone}
                                onChange={(e) => updateWorkField(index, 'phone', e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col gap-2 w-full pt-2'>
                                <span className='labelform w-full'>{t('jobs:datestart_input')}</span>
                                <CustomDatePicker 
                                name="period1" 
                                required 
                                value={work.period1}
                                onChange={(value) => updateWorkField(index, 'period1', value)}
                                />
                            </div>
                            <div className='flex flex-col gap-2 w-full py-2'>
                                <span className='labelform w-full'>{t('jobs:datefinish_input')}</span>
                                <CustomDatePicker 
                                name="period2" 
                                required 
                                value={work.period2}
                                onChange={(value) => updateWorkField(index, 'period2', value)}
                                />
                            </div>
                            <InputField 
                            label={t('jobs:boss_input')} 
                            name="position" 
                            required 
                            value={work.boss}
                            onChange={(e) => updateWorkField(index, 'boss', e.target.value)}
                            />
                            <InputField 
                            label={t('jobs:worktype_input')} 
                            name="position" 
                            value={work.position}
                            required 
                            onChange={(e) => updateWorkField(index, 'position', e.target.value)}
                            />
                            <div className='flex gap-2 w-full'>
                                <InputField 
                                label={t('jobs:salary_input')} 
                                name="salary" 
                                required 
                                value={work.salary}
                                onChange={(e) => updateWorkField(index, 'salary', e.target.value)}
                                />
                                <InputField 
                                label={t('jobs:lastsalary_input')} 
                                name="salary" 
                                required 
                                value={work.lastsalary}
                                onChange={(e) => updateWorkField(index, 'lastsalary', e.target.value)}
                                />
                            </div>
                            <InputField 
                            label={t('jobs:functions_input')} 
                            name="reason" 
                            required onChange={(e) => updateWorkField(index, 'functions', e.target.value)}
                            value={work.functions}
                            />
                            <div className='flex flex-col gap-2 py-2'>
                                <span className='labelform'>{t('jobs:references_input')}</span>
                                <RadioGroupButtons
                                    name="reference"
                                    options={[
                                        { label: t('general:locale') === 'es' ? 'Si' : 'Yes', value: true },
                                        { label: t('general:locale') === 'es' ? 'No' : 'No', value: false },
                                    ]}
                                    selected={work.referencesAllowed}
                                    onChange={(value) => updateWorkField(index, 'referencesAllowed', value)}
                                />
                            </div>
                            <InputField 
                            label={t('jobs:dismiss_input')} 
                            name="enterprise" 
                            required 
                            value={work.dismissReason}
                            onChange={(e) => updateWorkField(index, 'dismissReason', e.target.value)}
                            />
                        </div>
                        ))}
                    <button className='italic text-black py-2 w-full' onClick={() => addWorkExperience()}>
                        {t('jobs:work_type')} +
                    </button>
                </div>
                {/* Referencias */}
                <div className='pt-4 w-full gap-4 flex flex-col'>
                    <LineTitle text={t('jobs:laboral_references')} secondary form/>
                    {laboralreferences.map((reference, index) => (
                        <div key={index} className='flex flex-col gap-2 w-full'>
                            <InputField 
                            label={t('jobs:referencename_input')} 
                            value={reference.name}
                            name="enterprise" 
                            required
                             onChange={(e) => updateReferenceField(index, 'name', e.target.value)}
                            />
                            <InputField 
                            label={t('jobs:referencejob_input')} 
                            name="enterprise" 
                            value={reference.job}
                            required 
                            onChange={(e) => updateReferenceField(index, 'job', e.target.value)}
                            />
                            <InputField 
                            label={t('jobs:enterprisejob_input')} 
                            name="enterprise" 
                            value={reference.company}
                            required 
                            onChange={(e) => updateReferenceField(index, 'company', e.target.value)}
                            />
                            <InputField 
                            label={t('jobs:enterprisetel_input')} 
                            name="enterprise" 
                            value={reference.phone}
                            required onChange={(e) => updateReferenceField(index, 'phone', e.target.value)}
                            />
                        </div>
                    ))}
                    <button className='italic text-black py-2 w-full' onClick={() => addLaboralReference()}>
                        {t('jobs:morereference')} +
                    </button>
                </div>
                {/* Referencias personales */}
                <div className='pt-4 w-full gap-4 flex flex-col'>
                    <LineTitle text={t('jobs:personalreference')} secondary form/>
                    {personalreferences.map((reference, index) => (
                        <div key={index} className='flex flex-col gap-2 w-full'>
                            <InputField
                            label={t('jobs:personalreference1')}
                            name="Nombre"
                            required
                            value={reference.name}
                            onChange={(e) => updatePersonalReferenceField(index, 'name', e.target.value)}
                            />
                            <InputField
                            label={t('jobs:personalreference2')}
                            name="parentesco"
                            required
                            value={reference.relationship}
                            onChange={(e) => updatePersonalReferenceField(index, 'relationship', e.target.value)}
                            />
                            <InputField
                            label={t('jobs:personalreference3')}
                            name="telefono"
                            required
                            value={reference.phone}
                            onChange={(e) => updatePersonalReferenceField(index, 'phone', e.target.value)}
                            />
                        </div>
                    ))}
                    <button className='italic text-black py-2 w-full' onClick={() => addPersonalReference()}>
                        {t('jobs:personal_reference')} +
                    </button>
                </div>
                <div className='pt-4 w-full gap-4 flex flex-col'>
                    <LineTitle text={t('jobs:personalreference')} secondary form/>
                    <div className='flex flex-col gap-2 py-2'>
                        <span className='labelform'>{t('jobs:personalquestion1')}</span>
                        <RadioGroupButtons
                            name="working"
                            options={[
                                { label: t('general:locale') === 'es' ? 'Si' : 'Yes', value: true },
                                { label: t('general:locale') === 'es' ? 'No' : 'No', value: false },
                            ]}
                            onChange={(value) => setCurrentlyWorking(value)}
                            selected={currentlyWorking}
                        />
                    </div>
                    <InputField label={t('jobs:personalquestion2')} name="disponibility" required onChange={(e) => setWorkAvailability(e.target.value)} />
                    <InputField label={t('jobs:personalquestion3')} name="disponibility" required onChange={(e) => setSalaryExpectation(e.target.value)} />
                    <InputField label={t('jobs:personalquestion4')} name="disponibility" required onChange={(e) => setRecommendation(e.target.value)} />
                    <div className='flex flex-col gap-2 py-2'>
                        <span className='labelform'>{t('jobs:personalquestion5')}</span>
                        <RadioGroupButtons
                            name="family"
                            options={[
                                { label: t('general:locale') === 'es' ? 'Si' : 'Yes', value: 'yes' },
                                { label: t('general:locale') === 'es' ? 'No' : 'No', value: 'no' },
                            ]}
                            selected={hasFamilyInCompany}
                            onChange={(value) => setHasFamilyInCompany(value)}
                        />
                    </div>
                    <InputField label={t('jobs:personalquestion6')} name="disponibility" required onChange={(e) => setFamilyDetails(e.target.value)} />
                    <InputField label={t('jobs:personalquestion7')} name="disponibility" required onChange={(e) => setObservations(e.target.value)} />
                </div>
                {/* Observaciones */}
                <div className='pt-4 w-full gap-4 flex flex-col'>
                    <InputField label={t('jobs:me_text')} name="disponibility" required onChange={(e) => setTermsAcceptedName(e.target.value)} />
                    <div className='py-4 w-full'>
                        <span className='affirmtextform'>{t('jobs:text_accept')}</span>
                    </div>
                    <label
                        className="inputfield flex flex-1 text-start gap-2"
                    >
                        <input
                        type="radio"
                        name={"accept"}
                        checked={termsAccepted}
                        value={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        required
                        className="accent-black outline-none focus:outline-none"
                        />
                        <span className="text-black">{t('jobs:accept_btn')}</span>
                    </label>
                </div>
                <div className='pt-4 w-full gap-4 flex flex-col'>  
                    <LineTitle text={t('jobs:paper_btn')} secondary form />                  
                    <FileUpload label={t('jobs:cv_input')} name="cv" required accept='application/pdf' onChange={(e) => setCvFile(e.target.files[0])} />
                    <FileUpload label={t('jobs:worksuser_input')} name="cert" required accept='zip' onChange={(e) => setCertFile(e.target.files)} />
                </div>
            <button className='bg-black text-white py-2 px-4 rounded-2xl w-full mt-10' onClick={handleSubmit}>
                {t('jobs:form_btn')}
            </button>
        </div>
    )
}

export default ContactForm