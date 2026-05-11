export default function MockInbox() {
  return (
    <div className="mock">
      <div className="mock-bar">
        <div className="dots"><span className="r" /><span className="y" /><span className="g" /></div>
        <div className="url">tracker.app / inbox</div>
      </div>
      <div className="mock-body">
        <div className="mock-inbox">
          <div className="mock-side">
            <div className="nav-item on"><span>Inbox</span><span className="count">24</span></div>
            <div className="nav-item"><span>Replies</span><span className="count">7</span></div>
            <div className="nav-item"><span>Opens</span><span className="count">142</span></div>
            <div className="nav-item"><span>Clicks</span><span className="count">38</span></div>
            <div className="nav-item"><span>Sent</span><span className="count">—</span></div>
          </div>
          <div className="mock-mail">
            <div className="item unread">
              <div className="from">Sarah K. <span className="time">2m</span></div>
              <div className="subj">Re: Quick question about pricing</div>
              <div className="prev">Yes, this looks great — when can we hop on a call?</div>
            </div>
            <div className="item">
              <div className="from">Marcus T. <span className="time">14m</span></div>
              <div className="subj">Opened · Cold outreach v3</div>
              <div className="prev">Tracked 3 opens, 1 link click</div>
            </div>
            <div className="item">
              <div className="from">Jen R. <span className="time">1h</span></div>
              <div className="subj">Forwarded to team</div>
              <div className="prev">Looping in our CTO on this thread...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
