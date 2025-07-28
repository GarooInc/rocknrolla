"use client"
import React from 'react'
import { useState, useRef } from 'react'
import InputField from '../InputField/InputField'
import FileUpload from '../FileUpload/FileUpload'
import RadioGroupButtons from '../RadioGroupButtons/RadioGroupButtons'
import LineTitle from '../LineTitle/LineTitle'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import SelectField from '../SelectField/SelectField'
import nationalities_en from '@/public/data/nationalities_en'
import countries from '@/public/data/countries'
import { useTranslation } from 'react-i18next';
import municipiosGuate from '@/public/data/municipios'
import { useArrayField } from '@/hooks/useArrayField';
import LineButton from '../LineButton/LineButton'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'




const ContactForm = () => {
    const { t } = useTranslation();
    const api = process.env.NEXT_PUBLIC_API_ZAPIER_URL;
    const [showSuccess, setShowSuccess] = useState(false);
    const [touched, setTouched] = useState({});

    const [applicationDate] = useState(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // +1 porque los meses van de 0 a 11
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
    });

    const [jobPosition, setJobPosition] = useState('');
    const [contractType, setContractType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [nationality, setNationality] = useState('Guatemalan');
    const [country, setCountry] = useState('Guatemala');
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

    const [cvFile, setCvFile] = useState(null);
    const [certFile, setCertFile] = useState(null);
    const [fotografia, setFotografia] = useState(null);

    const [linkedin, setLinkedin] = useState('');
    const [behance, setBehance] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null)




    const jobOptions = [
        t('jobtypes:job1'),
        t('jobtypes:job2'),
        t('jobtypes:job3'),
        t('jobtypes:job4'),
        t('jobtypes:job5'),
        t('jobtypes:job6'),
        t('jobtypes:job7'),
        t('jobtypes:job8'),
        t('jobtypes:job9'), 
        t('jobtypes:job10'),
        t('jobtypes:job11'),
        t('jobtypes:job12'),
        t('jobtypes:job13'),
        t('jobtypes:job14'),
        t('jobtypes:job15'),
        t('jobtypes:job16'),
        t('jobtypes:job17')
    ].sort((a, b) => a.localeCompare(b));


    const [educationreceived, updateEducationField, addEducation, removeEducation] = useArrayField(
        Array.from({ length: 2 }, () => ({
        level: '',
        school: '',
        period1: '',
        period2: '',
        title: '',
        }))
    );

      const [workexperience, updateWorkField, addWorkExperience, removeWorkExperience] = useArrayField(
        Array.from({ length: 3 }, () => ({
        enterprise: '',
        address: '',
        phone: '',
        period1: '',
        period2: '',
        boss: '',
        jobtype: '',
        position: '',
        salary: '',
        lastsalary: '',
        functions: '',
        referencesAllowed: '',
        dismissReason: '',
        }))
    )
    
      const [laboralreferences, updateReferenceField, addLaboralReference, removeLaboralReference] = useArrayField([
        { name: '', job: '', company: '', phone: '' , email: '' },
      ]);  
      
      const [personalreferences, updatePersonalReferenceField, addPersonalReference, removePersonalReference] = useArrayField([
        { name: '', relationship: '', personalphone: '', personalemail: '' },
      ]);

      const validateField = (name, value) => {
        switch (name) {
            case 'phone':
                if (!/^\d*$/.test(value)) {
                    return 'El teléfono solo debe contener números.';
                }
                if (value.length > 0 && value.length < 8) {
                    return 'El teléfono debe tener al menos 8 dígitos.';
                }
                return '';
            case 'email':
                if (!value) {
                    return '';
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return 'Correo no válido.';
                }
                return '';
            case 'salary':
                if (!/^\d*$/.test(value)) {
                    return 'El salario solo debe contener números.';
                }
                return '';
            case 'textField':
                if (!value) {
                    return 'Este campo es obligatorio.'; 
                }
                if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(value)) {
                    return 'Este campo solo debe contener letras.';
                }
                return '';
            case 'direccion':
                if (!value) {
                    return 'La dirección es obligatoria.';
                }
            default:
                return '';
        }
    };
    
      

      const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity()
            return
        }

        setIsSubmitting(true);
        const formData = new FormData();
    
        const formDataObject = {
            fecha: applicationDate || '',
            puesto_solicitud: jobPosition || '',
            tipo_contratacion: contractType || '',
            nombre_completo: `${firstName} ${lastName}` || '',
            fecha_nacimiento: birthDate || '',
            nacionalidad: nationality || '',
            pais_residencia: country || '',
            municipio: municipality || '',
            direccion: address || '',
            telefono: phone || '',
            email: email || '',
            estado_civil: civilStatus || '',
            trabajando_actualmente: currentlyWorking ? 'Sí' : 'No',
            disponibilidad_laboral: workAvailability || '',
            pretencion_salarial: salaryExpectation || '',
            recomendacion: recommendation || '',
            familiares_empresa: hasFamilyInCompany || '',
            detalles_familiar: familyDetails || '',
            observaciones: observations || '',
            tyc: termsAcceptedName || '',
            tyc_val: termsAccepted ? true : false,
            educacion: educationreceived.map((education) => ({
                nivel_educativo: education.level || '',
                institucion: education.school || '',
                periodo: {
                    inicio: education.period1 || '',
                    fin: education.period2 || '',
                },
                titulo: education.title || '',
            })),
            experiencia: workexperience.map((work) => ({
                nombre_empresa: work.enterprise || '',
                direccion: work.address || '',
                telefono: work.phone || '',
                fecha_ingreso: {
                    mes: work.period1.split('-')[0] || '',
                    año: work.period1.split('-')[1] || '',
                },
                fecha_egreso: {
                    mes: work.period2.split('-')[0] || '',
                    año: work.period2.split('-')[1] || '',
                },
                jefe_inmediato: work.boss || '',
                puesto: work.position || '',
                salario_inicial: work.salary || '',
                salario_final: work.lastsalary || '',
                desempeno: work.functions || '',
                referencias: work.referencesAllowed ? 'Sí' : 'No',
                motivo_retiro: work.dismissReason || '',
            })),
            referencias_laborales: laboralreferences.map((reference) => ({
                nombre: reference.name || '',
                puesto: reference.job || '',
                empresa: reference.company || '',
                telefono: reference.phone || '',
                email: reference.email || '',
            })),
            referencias_personales: personalreferences.map((reference) => ({
                nombre: reference.name || '',
                relacion: reference.relationship || '',
                telefono: reference.personalphone || '',
                email: reference.personalemail || '',
            })),
            linkedin: linkedin || '',
            Behance: behance || '',
        };
    
        formData.append('form_data', JSON.stringify(formDataObject));
    
        if (cvFile) formData.append('cv', cvFile);
        if (certFile) formData.append('file_of_work', certFile);
        if (fotografia) formData.append('fotografia', fotografia);
    
        console.log('Datos enviados:', [...formData]);
    
        try {
            const response = await fetch(api, {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) throw new Error('Error al enviar datos');
            const result = await response.json();
            console.log('Éxito:', result);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
            // Reset form fields
            setJobPosition('');
            setContractType('');
            setFirstName('');
            setLastName('');
            setBirthDate(null);
            setNationality('Guatemalan');
            setCountry('Guatemala');
            setMunicipality('');
            setAddress('');     
            setPhone('');
            setEmail('');
            setCivilStatus('');
            setCurrentlyWorking('');
            setWorkAvailability('');
            setSalaryExpectation('');
            setRecommendation('');
            setHasFamilyInCompany('');
            setFamilyDetails('');
            setObservations('');
            setTermsAcceptedName('');
            setTermsAccepted(false);
            setCvFile(null);
            setCertFile(null);
            setFotografia(null);
            updateEducationField([]);
            updateWorkField([]);
            updateReferenceField([]);
            updatePersonalReferenceField([]);
            setLinkedin('');
            setBehance('');
        } catch (err) {
            console.error('Error:', err);
        }finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form ref={formRef} className='flex flex-col gap-4 w-full md:w-1/2 justify-center items-center bg-white pb-20 px-10 md:p-20 relative'>
            {showSuccess && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 shadow-md">
                <div className="bg-white px-8 py-6 rounded-2xl shadow-xl text-center flex flex-col gap-4">
                <span className="text-black">Tu solicitud fue enviada con éxito</span>
                <LineButton text={t('jobs:close_btn')} secondary form onClick={() => setShowSuccess(false)} />
                </div>
            </div>
            
            )}
            {isSubmitting && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 shadow-md">
                <span className="loading loading-spinner loading-lg text-white"></span>
            </div>
            )}
            {/* Solicitud de trabajo  */}
            <div className='w-full gap-4 flex flex-col'>
                <LineTitle text={t('jobs:application')} secondary form/>
                <SelectField 
                    label={t('job_input')}
                    name="jobposition"
                    required  
                    options={jobOptions}
                    value={jobPosition}
                    onChange={(e) => setJobPosition(e.target.value)}
                />

                <div className='inputtype'>
                    <span className='labelform'>{t('jobs:typejob_input')}
                    <span className="text-red-500 ml-1">*</span>
                    </span>
                    <div className='flex gap-2'>
                        <RadioGroupButtons
                            name="typejob"
                            options={[
                                { label: t('jobs:typecontract1'), value: t('jobs:typecontract1') },
                                { label: t('jobs:typecontract2'), value: t('jobs:typecontract2') },
                            ]}
                            selected={contractType}
                            required
                            onChange={(value) => setContractType(value)}
                        />
                    </div>
                    <FileUpload label={t('jobs:pic_input')} required name="pic"  accept='image/*' onChange={(e) => setFotografia(e.target.files[0])} />
                </div>
            </div>
            <div className='pt-4 w-full gap-4 flex flex-col'>
                <LineTitle text={t('jobs:application')} secondary form/>
                <div className='flex flex-col gap-2 w-full'>

                    {/*separar nombre y apellido*/}
                    <div className='flex gap-2 w-full'>
                        <InputField 
                            label={t('jobs:name_input')}
                            name="firstName" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} 
                            onBlur={() => setTouched(prev => ({ ...prev, firstName: true }))}
                            checkError={touched.firstName && validateField('textField', firstName)}
                            required
                        />
                        <InputField 
                            label={t('jobs:lastname_input')}
                            name="lastName" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} 
                            onBlur={() => setTouched(prev => ({ ...prev, lastName: true }))}
                            checkError={touched.lastName && validateField('textField', lastName)}
                            required
                        />
                    </div>
                    <div className='inputtype'>
                        <span className='labelform'>{t('jobs:datebirth_input')}
                        <span className="text-red-500 ml-1">*</span>
                        </span>
                        <CustomDatePicker onChange={(date) => setBirthDate(date)} />                   
                    </div>
                    <SelectField label={t('nationality_input')} name="nationality" required
                        options={
                            nationalities_en
                        }
                        onChange={(e) => setNationality(e.target.value)}
                    />
                    <SelectField label={t('jobs:country_input')} name="country" required
                        options={
                            countries
                        }
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    {
                        country === 'Guatemala' && (
                            <SelectField label={t('jobs:municipio_input')} name="municipality" required
                                options={
                                    municipiosGuate
                                }
                                value={municipality}
                                onChange={(e) => setMunicipality(e.target.value)}
                                />
                            )
                    }
                    <InputField 
                    label={t('jobs:address_input')} 
                    name="address" 
                    required 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onBlur={() => setTouched(prev => ({ ...prev, address: true }))}
                    />

                    <div className='flex flex-col gap-2 w-full'>
                    <span className='labelform'>{t('jobs:tel_input')}
                        <span className="text-red-500 ml-1">*</span>
                    </span>
                        <PhoneInput
                        country={'gt'}
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: false,
                        }}
                        containerClass="container-phone"
                        inputClass="input-phone"
                        />
                    </div>
                    <InputField 
                    label={t('jobs:mail_input')} 
                    name="email" 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                    checkError={touched.email && validateField('email', email)}
                    />
                    <span className='labelform'>{t('jobs:civil_input')}
                        <span className="text-red-500 ml-1">*</span>
                    </span>
                    <div className='flex gap-2'>
                        <RadioGroupButtons
                            name="civil"
                            required
                            options={[
                                { label: t('jobs:civil1'), value: t('jobs:civil1') },
                                { label: t('jobs:civil2'), value: t('jobs:civil2') },
                                { label: t('jobs:civil3'), value: t('jobs:civil3') },
                            ]}
                            selected={civilStatus}
                            value={civilStatus}
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
                        <div key={index} 
                        className={`relative flex flex-col gap-2 w-full ${
                            index !== 0 ? 'border-t border-gray-300 pt-4 mt-6' : ''
                            }`}
                        >
                            <div className='flex flex-col gap-2 w-full'>
                                {
                                    index >= 2  && (
                                        <button
                                    type="button"
                                    onClick={() => removeWorkExperience(index)}
                                    className="absolute top-0 right-0 text-gray-500 hover:text-red-600 text-xl"
                                    title={t('jobs:delete_experience')}
                                    >
                                    &times;
                                    </button>
                                    )
                                }
                                <SelectField label={t('jobs:education_input')} name="level" required
                                options={
                                    [
                                        t('jobs:education5'),
                                        t('jobs:education4'),
                                        t('jobs:education3'),
                                        t('jobs:education2'),
                                        t('jobs:education1'),
                                    ]
                                }
                                value={education.level}
                                onChange={(e) => updateEducationField(index, 'level', e.target.value)}
                                />
                                <InputField
                                label={t('jobs:institution_input')}
                                name="school"
                                required
                                value={education.school}
                                onChange={(e) => updateEducationField(index, 'school', e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, school: true }))}
                                checkError={touched.school && validateField('textField', education.school)}
                                />
                                <div className='flex flex-col py-2 w-full'>
                                    <span className='labelform w-full'>{t('jobs:period_input')}</span>
                                        <div className='flex flex-col gap-2 w-full pt-2'>
                                            <span className='labelformlower w-full'>{t('jobs:period_input1')}
                                                <span className="text-red-500 ml-1">*</span>
                                            </span>
                                            <CustomDatePicker 
                                            name="period1" 
                                            required 
                                            value={education.period1 }
                                            onChange={(value) => updateEducationField(index, 'period1', value)}
                                            monthyear
                                            />
                                        </div>
                                        <div className='flex flex-col gap-2 w-full py-2'>
                                            <span className='labelformlower w-full'>{t('jobs:period_input2')}
                                                <span className="text-red-500 ml-1">*</span>
                                            </span>
                                            <CustomDatePicker 
                                            name="period2" 
                                            required 
                                            value={education.period2}
                                            onChange={(value) => updateEducationField(index, 'period2', value)}
                                            monthyear
                                            />
                                        </div>
                                </div>
                                <InputField
                                label={t('jobs:titlegrad_input')}
                                name="degree"
                                required
                                value={education.title}
                                onChange={(e) => updateEducationField(index, 'title', e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, title: true }))}
                                checkError={touched.title && validateField('textField', education.title)}
                                />
                            </div>
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
                        <div
                            key={index}
                            className={`relative flex flex-col gap-2 w-full ${
                            index !== 0 ? 'border-t border-gray-300 pt-4 mt-6' : ''
                            }`}
                            >
                            <div className='flex flex-col gap-2 w-full'>
                                {
                                    index >= 1 && (
                                        <button
                                    type="button"
                                    onClick={() => removeWorkExperience(index)}
                                    className="absolute top-0 right-0 text-gray-500 hover:text-red-600 text-xl"
                                    title={t('jobs:delete_experience')}
                                    >
                                    &times;
                                    </button>
                                    )
                                }
                                <InputField 
                                label={t('jobs:nameenterprise_input')} 
                                name="enterprise" 
                                value={work.enterprise}
                                required 
                                onChange={(e) => updateWorkField(index, 'enterprise', e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, enterprise: true }))}
                                checkError={touched.enterprise && validateField('textField', work.enterprise)}
                                />
                                <div className='flex flex-col gap-2 w-full'>
                                    <span className='labelform'>{t('jobs:tel_input')}
                                    <span className="text-red-500 ml-1">*</span>
                                    </span>
                                    <PhoneInput
                                    country={'gt'}
                                    value={work.phone}
                                    onChange={(value) => updateWorkField(index, 'phone', value)}
                                    inputProps={{
                                        name: 'phone',
                                        required: false,
                                        autoFocus: false,
                                    }}
                                    containerClass="container-phone"
                                    inputClass="input-phone"
                                    />
                                </div>
                                
                            </div>
                            <div className='flex flex-col gap-2 w-full pt-2'>
                                <span className='labelform w-full'>{t('jobs:datestart_input')}
                                <span className="text-red-500 ml-1">*</span>
                                </span>
                                <CustomDatePicker 
                                name="period1" 
                                required 
                                value={work.period1}
                                onChange={(value) => updateWorkField(index, 'period1', value)}
                                monthyear
                                />
                            </div>
                            <div className='flex flex-col gap-2 w-full py-2'>
                                <span className='labelform w-full'>{t('jobs:datefinish_input')}
                                <span className="text-red-500 ml-1">*</span>
                                </span>
                                <CustomDatePicker 
                                name="period2" 
                                required 
                                value={work.period2}
                                onChange={(value) => updateWorkField(index, 'period2', value)}
                                monthyear
                                />
                            </div>
                            <InputField 
                            label={t('jobs:boss_input')} 
                            name="position" 
                            required 
                            value={work.boss}
                            onChange={(e) => updateWorkField(index, 'boss', e.target.value)}
                            onBlur={() => setTouched(prev => ({ ...prev, boss: true }))}
                            checkError={touched.boss && validateField('textField', work.boss)}
                            />
                            <InputField 
                            label={t('jobs:worktype_input')} 
                            name="position" 
                            value={work.position}
                            required 
                            onChange={(e) => updateWorkField(index, 'position', e.target.value)}
                            onBlur={() => setTouched(prev => ({ ...prev, position: true }))}
                            checkError={touched.position && validateField('textField', work.position)}
                            />
                            <div className='flex gap-2 w-full'>
                                <InputField 
                                label={t('jobs:salary_input')} 
                                name="salary" 
                                required 
                                value={work.salary}
                                onChange={(e) => updateWorkField(index, 'salary', e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, salary: true }))}
                                checkError={touched.salary && validateField('salary', work.salary)}
                                />
                                <InputField 
                                label={t('jobs:lastsalary_input')} 
                                name="salary" 
                                required 
                                value={work.lastsalary}
                                onChange={(e) => updateWorkField(index, 'lastsalary', e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, lastsalary: true }))}
                                checkError={touched.lastsalary && validateField('salary', work.lastsalary)}
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
                                    required
                                    name="reference"
                                    options={[
                                        { label: t('jobs:yes_btn'), value: true },
                                        { label: t('jobs:no_btn') , value: false },
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
                        <div
                            key={index}
                            className={`relative flex flex-col gap-2 w-full ${
                            index !== 0 ? 'border-t border-gray-300 pt-4 mt-6' : ''
                            }`}
                        >
                            {
                                index !== 0 && (
                                    <button
                                type="button"
                                onClick={() => removeLaboralReference(index)}
                                className="absolute top-0 right-0 text-gray-500 hover:text-red-600 text-xl"
                                title={t('jobs:delete_experience')}
                                >
                                &times;
                                </button>
                                )
                            }
                            <InputField 
                            label={t('jobs:referencename_input')} 
                            value={reference.name}
                            name="enterprise" 
                            required
                            onChange={(e) => updateReferenceField(index, 'name', e.target.value)}
                            onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                            checkError={touched.name && validateField('textField', reference.name)}
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

                            <div className='flex gap-2 w-full'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <span className='labelform'>{t('jobs:tel_input')}
                                    <span className="text-red-500 ml-1">*</span>
                                    </span>
                                    <PhoneInput
                                    country={'gt'}
                                    value={reference.phone} 
                                    onChange={(value) => updateReferenceField(index, 'phone', value)}
                                    inputProps={{
                                        name: 'phone',
                                        required: false,
                                        autoFocus: false,
                                    }}
                                    containerClass="container-phone"
                                    inputClass="input-phone"
                                    />
                                </div>
                                <InputField
                                label={t('jobs:referencemail_input')}
                                name="email"
                                value={reference.email}
                                required
                                onChange={(e) => updateReferenceField(index, 'email', e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                                checkError={touched.email && validateField('email', reference.email)}
                                />
                            </div>
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
                        <div 
                            key={index}
                            className={`relative flex flex-col gap-2 w-full ${
                            index !== 0 ? 'border-t border-gray-300 pt-4 mt-6' : ''
                            }`}
                        >
                            {
                                index !== 0 && (
                                    <button
                                    type="button"
                                    onClick={() => removePersonalReference(index)}
                                    className="absolute top-0 right-0 text-gray-500 hover:text-red-600 text-xl"
                                    title={t('jobs:delete_experience')}
                                    >
                                    &times;
                                    </button>
                                )
                            }
                            <InputField
                            label={t('jobs:personalreference1')}
                            name="Nombre"
                            required
                            value={reference.name}
                            onChange={(e) => updatePersonalReferenceField(index, 'name', e.target.value)}
                            onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                            checkError={touched.name && validateField('textField', reference.name)}

                            />
                            <InputField
                            label={t('jobs:personalreference2')}
                            name="parentesco"
                            required
                            value={reference.relationship}
                            onChange={(e) => updatePersonalReferenceField(index, 'relationship', e.target.value)}
                            onBlur={() => setTouched(prev => ({ ...prev, relationship: true }))}
                            checkError={touched.relationship && validateField('textField', reference.relationship)}
                            />
                            <div className='flex gap-2 w-full'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <span className='labelform'>{t('jobs:tel_input')}
                                    <span className="text-red-500 ml-1">*</span>
                                    </span>
                                    <PhoneInput
                                    country={'gt'}
                                    value={reference.personalphone}
                                    onChange={(value) => updatePersonalReferenceField(index, 'personalphone', value)}
                                    inputProps={{
                                        name: 'phone',
                                        required: false,
                                        autoFocus: false,
                                    }}
                                    containerClass="container-phone"
                                    inputClass="input-phone"
                                    />
                                </div>
                                <InputField
                                label={t('jobs:referencemail_input')}
                                name="email"
                                required
                                value={reference.personalemail}
                                onChange={(e) => updatePersonalReferenceField(index, 'personalemail', e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                                checkError={touched.email && validateField('email', reference.personalemail)}
                                />
                            </div>
                        </div>
                    ))}
                    <button className='italic text-black py-2 w-full' onClick={() => addPersonalReference()}>
                        {t('jobs:personal_reference')} +
                    </button>
                </div>
                <div className='pt-4 w-full gap-4 flex flex-col'>
                    <LineTitle text={t('jobs:personalreference')} secondary form/>
                    <div className='flex flex-col gap-2 py-2'>
                        <span className='labelform'>{t('jobs:personalquestion1')}
                        <span className="text-red-500 ml-1">*</span>
                        </span>
                        <RadioGroupButtons
                            required
                            name="working"
                            options={[
                                { label: t('jobs:yes_btn'), value: true },
                                { label: t('jobs:no_btn'), value: false },
                            ]}
                            onChange={(value) => setCurrentlyWorking(value)}
                            selected={currentlyWorking}
                        />
                    </div>
                    <InputField 
                        label={t('jobs:personalquestion2')} 
                        name="disponibility" 
                        value={workAvailability}
                        required onChange={(e) => setWorkAvailability(e.target.value)} 
                        onBlur={() => setTouched(prev => ({ ...prev, workAvailability: true }))}
                        checkError={touched.workAvailability && validateField('textField', workAvailability)}
                    />
                    <InputField 
                        label={t('jobs:personalquestion3')} 
                        name="salaryexpectation" 
                        value={salaryExpectation}
                        required 
                        onChange={(e) => setSalaryExpectation(e.target.value)} 
                        onBlur={() => setTouched(prev => ({ ...prev, salaryExpectation: true }))}
                        checkError={touched.salaryExpectation && validateField('salary', salaryExpectation)}
                    />

                    <InputField 
                    label={t('jobs:personalquestion4')} 
                    name="disponibility" 
                    value={recommendation}
                    required onChange={(e) => setRecommendation(e.target.value)} 
                    onBlur={() => setTouched(prev => ({ ...prev, recommendation: true }))}
                    checkError={touched.recommendation && validateField('textField', recommendation)}
                    />
                    <div className='flex flex-col gap-2 py-2'>
                        <span className='labelform'>{t('jobs:personalquestion5')}
                        <span className="text-red-500 ml-1">*</span>
                        </span>
                        <RadioGroupButtons
                            name="family"
                            required
                            options={[
                                { label: t('jobs:yes_btn'), value: 'Sí' },
                                { label: t('jobs:no_btn'), value: 'No' },
                            ]}
                            selected={hasFamilyInCompany}
                            onChange={(value) => setHasFamilyInCompany(value)}
                        />
                    </div>
                    <InputField 
                    label={t('jobs:personalquestion6')} 
                    name="familydetails" 
                    required 
                    value={familyDetails}
                    onChange={(e) => setFamilyDetails(e.target.value)} 
                    />
                    <InputField 
                    label={t('jobs:personalquestion7')} 
                    name="disponibility" 
                    value={observations}
                    required onChange={(e) => setObservations(e.target.value)} />
                </div>
                {/* Observaciones */}
                <div className='pt-4 w-full gap-4 flex flex-col'>
                    <InputField 
                    label={t('jobs:me_text')} 
                    secondaryLabel={t('jobs:fullname_personal')}
                    name="terms" 
                    value={termsAcceptedName}
                    required onChange={(e) => setTermsAcceptedName(e.target.value)} 
                    />
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
                    <FileUpload label={t('jobs:worksuser_input')} name="cert" required accept='zip' onChange={(e) => setCertFile(e.target.files[0])} />
                    <div className='flex gap-2 w-full'>
                        <InputField
                            label="LinkedIn"
                            name="other"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                        />
                        <InputField
                            label="Behance"
                            name="other"
                            value={behance}
                            onChange={(e) => setBehance(e.target.value)}
                        />
                    </div>
                </div>
            {
                isSubmitting ? (
                    <button className='bg-black text-white py-2 px-4 rounded-2xl w-full mt-10 disabled:opacity-50 cursor-not-allowed' disabled>
                        {t('jobs:form_btn')}
                    </button>
                ) : (
                    <button className='bg-black text-white py-2 px-4 rounded-2xl w-full mt-10' onClick={handleSubmit}>
                        {t('jobs:form_btn')}
                    </button>
                )
            }
            <div className='absolute bottom-4 z-10 '>
                    <LineButton text={t('general:back')} secondary />
            </div>

        </form>
    )
}

export default ContactForm