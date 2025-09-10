import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogContent, Typography, CircularProgress} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import axios from 'axios'
import Footer from './Footer'
import logo from "../img/logo.png"
import vector from "../img/Vector.png"

function Contact() {
    const [showProgress, setProgres] = useState(true)
    const [dark, setDarkMode] = useState(false)
    const [fullName, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const [modal, setModal] = useState({
        open: false,
        loading: false,
        success: false,
        error: ""
    })

    useEffect(() => {
        const timer = setTimeout(() => setProgres(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    async function post_Comment(e) {
        e.preventDefault()

        if (!message.trim()) {
            setModal({ open: true, loading: false, success: false, error: "Xabar yozilmadi!" })
            return
        }

        setModal({ open: true, loading: true, success: false, error: "" })

        try {
            await axios.post('https://fn3.fixoo.uz/api/contact', {
                fullName,
                phone,
                message
            })
            setModal({ open: true, loading: false, success: true, error: "" })
            setName("")
            setPhone("")
            setMessage("")
        } catch (err) {
            setModal({
                open: true,
                loading: false,
                success: false,
                error: "Xabar yuborishda xatolik yuz berdi!"
            })
        } finally {
            setTimeout(() => {
                setModal({ open: false, loading: false, success: false, error: "" })
            }, 3000)
        }
    }

    return (
        <div className={`${dark ? "bg-[#101828] text-white" : "bg-white text-black"}`}>
            <header className=''>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='flex gap-5'>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/main">Home</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/prop">Proporties</Link></li>
                                <li className='font-bold text-[#0061DF] hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/contact">Contacts</Link></li>
                            </ul>
                            <img src={vector} alt="" />
                        </nav>
                    </div>
                </section>
                <section className='relative max-w-[1150px] mx-auto pt-[100px]'>
                    <div className="absolute top-[100px] right-[900px] w-[100px] h-[100px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full blur-[100px] bg-[#e4b75a] opacity-15 -z-10"></div>

                    <div className='relative z-10'>
                        <p className=' font-bold'>Bog'lanish</p>
                        <h1 className='text-[40px]'>Savollaringiz bo’lsa murojaat qiling</h1>
                    </div>
                </section>

                
                <section className={`relative z-10 max-w-[1150px] flex flex-col items-center justify-center mx-auto mt-[40px] border h-auto p-6 rounded-lg ${dark ? "bg-[#101828] text-white" : "bg-white text-black"}`}>
                    <h1 className='text-3xl font-bold mb-6'>Murojaatlarni shu yerdan jo'nating</h1>
                    <form className='flex flex-col gap-4 w-full max-w-[500px]' onSubmit={post_Comment}>
                        <label className='font-bold'>To'liq ism</label>
                        <input value={fullName} onChange={e => setName(e.target.value)} className='p-3 border rounded w-full bg-transparent text-inherit' type="text" placeholder='F.I.SH' />

                        <label className='font-bold'>Telefon</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} className='p-3 border rounded w-full bg-transparent text-inherit' type="tel" placeholder='+998' />

                        <label className='font-bold'>Xabar</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} className='p-3 border rounded w-full h-[120px] bg-transparent text-inherit' />

                        <button type='submit' className='h-[50px] rounded bg-blue-500 text-white font-bold hover:opacity-80 transition'>
                            Yuborish
                        </button>
                    </form>
                </section>
            </header>

            <Dialog
                open={modal.open}
                onClose={() => setModal({ ...modal, open: false })}
                PaperProps={{
                    style: {
                        borderRadius: 20,
                        padding: "20px",
                        textAlign: "center",
                        minWidth: "300px",
                    },
                }}
            >
                <DialogContent>
                    {modal.loading ? (
                        <>
                            <CircularProgress size={70} sx={{ color: "blue" }} />
                            <Typography mt={2} fontWeight="bold" fontSize={20}>
                                Yuborilmoqda...
                            </Typography>
                        </>
                    ) : modal.success ? (
                        <>
                            <CheckCircleIcon sx={{ fontSize: 70, color: "green" }} />
                            <Typography mt={2} fontWeight="bold" fontSize={20}>
                                Xabar muvaffaqiyatli yuborildi!
                            </Typography>
                        </>
                    ) : (
                        modal.error && (
                            <>
                                <ErrorIcon sx={{ fontSize: 70, color: "red" }} />
                                <Typography mt={2} fontWeight="bold" fontSize={20}>
                                    {modal.error}
                                </Typography>
                            </>
                        )
                    )}
                </DialogContent>
            </Dialog>
            <Footer />
        </div>
    )
}

export default Contact