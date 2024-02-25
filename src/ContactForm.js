import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useScrollAnimation } from './ScrollAnimationProvider';

const ContactForm = () => {
  const { scrollPosition } = useScrollAnimation;

  return (
    <div className="bg-gray-900 text-white py-20" id='contact' >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contactez-moi</h2>
        <Formik
          initialValues={{ nom: '', email: '', message: '' }}
          validationSchema={Yup.object({
            nom: Yup.string().required('Champ requis'),
            email: Yup.string().email('Adresse email invalide').required('Champ requis'),
            message: Yup.string().required('Champ requis'),
          })}
          onSubmit={(values, { setSubmitting }) => {
           
          }}
        >
          <Form className="bg-white p-8 rounded shadow-lg">
            <div className="mb-4">
              <label htmlFor="nom" className="block text-gray-900 font-semibold mb-2">Nom</label>
              <Field type="text" name="nom" className="w-full px-4 py-2 rounded border border-gray-900 focus:outline-none focus:border-blue-500 text-gray-900" />
              <ErrorMessage name="nom" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">Email</label>
              <Field type="email" name="email" className="w-full px-4 py-2 rounded border border-gray-900 focus:outline-none focus:border-blue-500 text-gray-900" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">Message</label>
              <Field as="textarea" name="message" className="w-full h-40 px-4 py-2 rounded border border-gray-900 focus:outline-none focus:border-blue-500 text-gray-900" />
              <ErrorMessage name="message" component="div" className="text-red-500" />
            </div>
            <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">Envoyer</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
