import React , {useEffect} from 'react';

import {useToDoStore} from '../../data/stores/useToDoStore';
import {InputPlus} from '../components/inputPlus';
import {InputTask} from '../components/inputTask';

import styles from './index.module.scss';



export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask,
        ] = useToDoStore(state=>[
            state.tasks,
            state.createTask,
            state.updateTask,
            state.removeTask,
    ]);

    console.log('start ---');
    // useEffect(()=>{
    //
    //     console.log('Use effect');
    //     createTask('asdsaf');
    // },[]);

    console.log(tasks, 'tasks')

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>Check list APP</h1>
            <section className={styles.articleSection}>
                <InputPlus
                    onAdd={(title) => {
                        if(title){
                            createTask(title);
                        }
                    }}
                />
            </section>

            <section className={styles.articleSection}>
                {!tasks.length && (
                    <p className={styles.articleText}>There is no tasks</p>
                )}

                {
                    tasks.map((task) =>(
                        <InputTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            onDone={removeTask}
                            onEdited={updateTask}
                            onRemoved={removeTask}
                        />
                    ))}

            </section>
        </article>
    );
}
