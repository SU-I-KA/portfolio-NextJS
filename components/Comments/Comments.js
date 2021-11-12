import React, { useState } from 'react'
import styles from './Comments.module.css'

function Comments() {
  const [comments, setComments] = useState([])
  const [user, setUser] = useState('')
  const [msg, setMsg] = useState('')

  const notValidToPost = (user.length > 0) & (msg.length > 0) ? false : true

  const deleteComment = (id) => {
    const newComments = comments.filter((comment) => comment.id !== id)
    setComments(newComments)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const comment = {
      id: Math.floor(Math.random() * 100 + 1),
      user: user,
      msg: msg,
    }
    setComments((oldComments) => {
      if (!oldComments) {
        return comment
      } else {
        return [...oldComments, comment]
      }
    })
    setUser('')
    setMsg('')
  }
  return (
    <div className={styles.comments__section} id='comments'>
      <div className='wrapper'>
        <div className='row'>
          <div className={`${styles.section__title} text-center`}>
            <h1>Comments</h1>
          </div>
        </div>
        <div className='row'>
          <div className={styles.comment__form}>
            <div className='row'>
              <div className={styles.comment__text}>
                <h2>Leave us a comment</h2>
                <p>Describe your experience with us</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className={styles.col__12}>
                  <input
                    className={styles.form__control}
                    type='text'
                    name='user'
                    value={user}
                    placeholder='Your Name'
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className={styles.col__12}>
                  <textarea
                    className={styles.form__control}
                    name='msg'
                    value={msg}
                    placeholder='Add a comment...'
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <button className={styles.btn__post} disabled={notValidToPost}>
                  post
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='row'>
          {comments.length > 0 && (
            <div className={styles.comments}>
              <div className={styles.comment__title}>recent comments</div>
              {comments.map((comment) => {
                const { id, user, msg } = comment
                return (
                  <div key={id} className={styles.comment}>
                    <div className='row space-between'>
                      <div className={styles.col__3}>
                        <div className={styles.user__img}>
                          {user.slice(0, 1)}
                        </div>
                      </div>
                      <div className={styles.col__9}>
                        <div className='row space-between'>
                          <div className={styles.user__name}>{user}</div>
                          <button
                            className={styles.btn__del}
                            onClick={() => deleteComment(id)}
                          >
                            delete
                          </button>
                        </div>
                        <div className={styles.msg}>{msg}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Comments
