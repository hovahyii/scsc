import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import styles from '../../styles/admin.module.css'
import Navbar from './components/Navbar'

const NewEvent = () => {
    const [form, setForm] = useState({ title: '',  date: '', time: '', venue: '', description: '', link: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createEvent();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createEvent = async () => {
        try {
            const res = await fetch('https://scsc-sarawak.vercel.app/api/events', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/admin/event");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.date) {
            err.description = 'Date is required';
        }

        if (!form.time) {
            err.description = 'Time is required';
        }
        if (!form.venue) {
            err.description = 'Venue is required';
        }

        if (!form.description) {
            err.description = 'Description is required';
        }
        if (!form.link) {
            err.description = 'Registration link is required';
        }

        return err;
    }

    return (
        <div className={styles.container}>
        <Navbar />
          
            <div className={styles.mainContent}>
            <h1>Event Details:</h1>

            <h2>Create Event</h2>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                label='Title'
                                placeholder='Title'
                                name='title'
                                onChange={handleChange}
                            />
                                <Form.Input
                                fluid
                                error={errors.date ? { content: 'Please enter a date', pointing: 'below' } : null}
                                label='Date'
                                placeholder='Date'
                                name='date'
                                onChange={handleChange}
                            />
                                <Form.Input
                                fluid
                                error={errors.time ? { content: 'Please enter a time', pointing: 'below' } : null}
                                label='Time'
                                placeholder='Time'
                                name='time'
                                onChange={handleChange}
                            />
                                <Form.Input
                                fluid
                                error={errors.venue ? { content: 'Please enter a venue', pointing: 'below' } : null}
                                label='Venue'
                                placeholder='Venue'
                                name='venue'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Descriprtion'
                                placeholder='Description'
                                name='description'
                                error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                             <Form.Input
                                fluid
                                error={errors.date ? { content: 'Please enter the registration link', pointing: 'below' } : null}
                                label='Registation link'
                                placeholder='Registation ink'
                                name='link'
                                onChange={handleChange}
                            />
                            <Button type='submit'>Create</Button>
                        </Form>
                }
            </div>
        </div>
    </div>
    )
}

export default NewEvent;

