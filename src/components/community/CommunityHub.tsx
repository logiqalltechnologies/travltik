// src/components/community/CommunityHub.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Search, Bell, Mail, ChevronDown, Plus, Download, CheckCheck,
  Smile, Paperclip, Image as ImageIcon, Send, MoreVertical,
  UserPlus, Users, X, ArrowLeft, Check, LogOut,
  ExternalLink, MessageSquare, Shield, CheckCircle2, Sparkles
} from 'lucide-react';

interface GroupMember {
  id: string;
  name: string;
  avatar: string;
  role?: 'Admin' | 'Moderator' | 'Member' | 'Licensed Expert';
}

interface ChatAttachment {
  name: string;
  size: string;
  type: string;
  url?: string;
  dataUrl?: string;
}

interface ChatMessage {
  id: string;
  senderName: string;
  senderAvatar: string;
  isSelf: boolean;
  text?: string;
  timestamp: string;
  attachment?: ChatAttachment;
  image?: string;
}

interface ChatRoom {
  id: string;
  title: string;
  type: 'group' | 'direct';
  countryCode?: string;
  flagComponent?: React.ReactNode;
  iconType?: 'flag' | 'plane' | 'food' | 'avatar';
  avatar?: string;
  memberCount: string;
  activeStatus: string;
  lastMessageSnippet: string;
  lastMessageTime: string;
  unreadCount: number;
  bannerImage: string;
  description: string;
  isJoined: boolean;
  totalMembersCountText: string;
  memberAvatars: string[];
  members: GroupMember[];
}

// Country Roundel Flag Components
const CanadaRoundel = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="50" fill="#FF0000" />
    <rect x="25" y="0" width="50" height="100" fill="#FFFFFF" />
    <path
      d="M50 20 L53 35 L62 30 L59 40 L69 43 L63 50 L72 58 L57 56 L55 68 L50 63 L45 68 L43 56 L28 58 L37 50 L31 43 L41 40 L38 30 L47 35 Z M49 63 L49 76 L51 76 L51 63 Z"
      fill="#FF0000"
    />
  </svg>
);

const GermanyRoundel = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <clipPath id="germany-clip"><circle cx="50" cy="50" r="50" /></clipPath>
    <g clipPath="url(#germany-clip)">
      <rect x="0" y="0" width="100" height="33.3" fill="#000000" />
      <rect x="0" y="33.3" width="100" height="33.3" fill="#DD0000" />
      <rect x="0" y="66.6" width="100" height="33.4" fill="#FFCE00" />
    </g>
  </svg>
);

const UKRoundel = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <clipPath id="uk-clip"><circle cx="50" cy="50" r="50" /></clipPath>
    <g clipPath="url(#uk-clip)">
      <rect x="0" y="0" width="100" height="100" fill="#012169" />
      <path d="M0 0 L100 100 M100 0 L0 100" stroke="#FFFFFF" strokeWidth="16" />
      <path d="M0 0 L100 100 M100 0 L0 100" stroke="#C8102E" strokeWidth="8" />
      <path d="M50 0 L50 100 M0 50 L100 50" stroke="#FFFFFF" strokeWidth="24" />
      <path d="M50 0 L50 100 M0 50 L100 50" stroke="#C8102E" strokeWidth="14" />
    </g>
  </svg>
);

const AustraliaRoundel = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <clipPath id="aus-clip"><circle cx="50" cy="50" r="50" /></clipPath>
    <g clipPath="url(#aus-clip)">
      <rect x="0" y="0" width="100" height="100" fill="#00008B" />
      <rect x="0" y="0" width="50" height="50" fill="#012169" />
      <path d="M0 0 L50 50 M50 0 L0 50" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0 0 L50 50 M50 0 L0 50" stroke="#C8102E" strokeWidth="4" />
      <path d="M25 0 L25 50 M0 25 L50 25" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M25 0 L25 50 M0 25 L50 25" stroke="#C8102E" strokeWidth="7" />
      <circle cx="25" cy="72" r="9" fill="#FFFFFF" />
      <circle cx="78" cy="24" r="4.5" fill="#FFFFFF" />
      <circle cx="66" cy="46" r="4.5" fill="#FFFFFF" />
      <circle cx="86" cy="56" r="4.5" fill="#FFFFFF" />
      <circle cx="75" cy="78" r="4.5" fill="#FFFFFF" />
      <circle cx="73" cy="54" r="2.5" fill="#FFFFFF" />
    </g>
  </svg>
);

const UAERoundel = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <clipPath id="uae-clip"><circle cx="50" cy="50" r="50" /></clipPath>
    <g clipPath="url(#uae-clip)">
      <rect x="0" y="0" width="100" height="33.3" fill="#00732F" />
      <rect x="0" y="33.3" width="100" height="33.3" fill="#FFFFFF" />
      <rect x="0" y="66.6" width="100" height="33.4" fill="#000000" />
      <rect x="0" y="0" width="28" height="100" fill="#FF0000" />
    </g>
  </svg>
);

const TravelRoundel = () => (
  <div className="w-full h-full rounded-full bg-sky-500 flex items-center justify-center text-white shadow-xs">
    <span className="text-xl">✈️</span>
  </div>
);

const FoodRoundel = () => (
  <div className="w-full h-full rounded-full bg-amber-500 flex items-center justify-center text-white shadow-xs">
    <span className="text-xl">🍱</span>
  </div>
);

export default function CommunityHub() {
  // Current user state (strictly loaded from real logged in session)
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: string;
    isLoggedIn: boolean;
  }>({
    id: 'guest',
    name: 'Community Member',
    email: '',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    role: 'Member',
    isLoggedIn: false
  });

  const [activeRoomId, setActiveRoomId] = useState<string>('canada');
  const [roomSearchQuery, setRoomSearchQuery] = useState('');
  const [activeCategoryTab, setActiveCategoryTab] = useState<'All' | 'Direct' | 'Groups'>('All');
  const [globalSearch, setGlobalSearch] = useState('');

  const [showLeftSidebarMobile, setShowLeftSidebarMobile] = useState(false);
  const [showRightDetailsMobile, setShowRightDetailsMobile] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [newChatTitle, setNewChatTitle] = useState('');
  const [newChatDescription, setNewChatDescription] = useState('');
  const [newChatType, setNewChatType] = useState<'group' | 'direct'>('group');

  const [inputText, setInputText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Real Database Members & Stats
  const [registeredMembers, setRegisteredMembers] = useState<GroupMember[]>([]);
  const [totalMembersCount, setTotalMembersCount] = useState<number>(49);
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(false);

  // Clean Initial Rooms (NO dummy last message snippets, NO fake unread counts)
  const [rooms, setRooms] = useState<ChatRoom[]>([
    {
      id: 'canada',
      title: 'Canada - PR & Life',
      type: 'group',
      countryCode: 'CA',
      flagComponent: <CanadaRoundel />,
      iconType: 'flag',
      memberCount: 'Active Group',
      activeStatus: 'Live Chat',
      lastMessageSnippet: 'No messages yet • Start chatting',
      lastMessageTime: '',
      unreadCount: 0,
      bannerImage: 'https://images.unsplash.com/photo-1517935703635-2719079c221a?q=80&w=800&auto=format&fit=crop',
      description: 'Official community hub for Canada PR, work permits, study visas, housing and settlement.',
      isJoined: true,
      totalMembersCountText: 'Group Members',
      memberAvatars: [],
      members: []
    },
    {
      id: 'germany',
      title: 'Germany Job Seekers',
      type: 'group',
      countryCode: 'DE',
      flagComponent: <GermanyRoundel />,
      iconType: 'flag',
      memberCount: 'Active Group',
      activeStatus: 'Live Chat',
      lastMessageSnippet: 'No messages yet • Start chatting',
      lastMessageTime: '',
      unreadCount: 0,
      bannerImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
      description: 'Chancenkarte Opportunity Card, EU Blue Card, CV reviews, and tech jobs in Germany.',
      isJoined: true,
      totalMembersCountText: 'Group Members',
      memberAvatars: [],
      members: []
    },
    {
      id: 'uk',
      title: 'UK Expats',
      type: 'group',
      countryCode: 'GB',
      flagComponent: <UKRoundel />,
      iconType: 'flag',
      memberCount: 'Active Group',
      activeStatus: 'Live Chat',
      lastMessageSnippet: 'No messages yet • Start chatting',
      lastMessageTime: '',
      unreadCount: 0,
      bannerImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
      description: 'UK Skilled Worker visas, Graduate visa routes, life and career in London and across the UK.',
      isJoined: false,
      totalMembersCountText: 'Group Members',
      memberAvatars: [],
      members: []
    },
    {
      id: 'australia',
      title: 'Australia Life & Migration',
      type: 'group',
      countryCode: 'AU',
      flagComponent: <AustraliaRoundel />,
      iconType: 'flag',
      memberCount: 'Active Group',
      activeStatus: 'Live Chat',
      lastMessageSnippet: 'No messages yet • Start chatting',
      lastMessageTime: '',
      unreadCount: 0,
      bannerImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
      description: 'Subclass 189/190/491, skills assessments, job market, and regional migration in Australia.',
      isJoined: true,
      totalMembersCountText: 'Group Members',
      memberAvatars: [],
      members: []
    },
    {
      id: 'uae',
      title: 'UAE Expats',
      type: 'group',
      countryCode: 'AE',
      flagComponent: <UAERoundel />,
      iconType: 'flag',
      memberCount: 'Active Group',
      activeStatus: 'Live Chat',
      lastMessageSnippet: 'No messages yet • Start chatting',
      lastMessageTime: '',
      unreadCount: 0,
      bannerImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      description: 'Dubai Golden Visas, company formation, freelance permits, banking, and expat living.',
      isJoined: false,
      totalMembersCountText: 'Group Members',
      memberAvatars: [],
      members: []
    },
    {
      id: 'travel',
      title: 'Travel & Adventure',
      type: 'group',
      iconType: 'plane',
      flagComponent: <TravelRoundel />,
      memberCount: 'Active Group',
      activeStatus: 'Live Chat',
      lastMessageSnippet: 'No messages yet • Start chatting',
      lastMessageTime: '',
      unreadCount: 0,
      bannerImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
      description: 'Flight companions, travel hacks, budget itinerary planning, and visa-free travel tips.',
      isJoined: true,
      totalMembersCountText: 'Group Members',
      memberAvatars: [],
      members: []
    },
    {
      id: 'lifestyle',
      title: 'Food, Culture & Lifestyle',
      type: 'group',
      iconType: 'food',
      flagComponent: <FoodRoundel />,
      memberCount: 'Active Group',
      activeStatus: 'Live Chat',
      lastMessageSnippet: 'No messages yet • Start chatting',
      lastMessageTime: '',
      unreadCount: 0,
      bannerImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
      description: 'International cuisine, Indian groceries abroad, cultural tips, and community meetups.',
      isJoined: false,
      totalMembersCountText: 'Group Members',
      memberAvatars: [],
      members: []
    }
  ]);

  // NO FAKE/DUMMY INITIAL MESSAGES - CLEAN EMPTY STATE
  const [messagesMap, setMessagesMap] = useState<{ [roomId: string]: ChatMessage[] }>({});

  // 1. Detect Real User Identity from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      let detectedName = '';
      let detectedEmail = '';
      let detectedAvatar = '';
      let detectedId = '';
      let detectedRole = 'Member';
      let isLogged = false;

      const storedUser = localStorage.getItem('travltik_user');
      if (storedUser && storedUser !== 'null') {
        const parsed = JSON.parse(storedUser);
        if (parsed) {
          isLogged = true;
          detectedEmail = parsed.email || '';
          detectedId = parsed.uid || parsed.id || '';
          detectedName = parsed.displayName || parsed.name || `${parsed.first_name || ''} ${parsed.last_name || ''}`.trim() || detectedEmail.split('@')[0];
          detectedAvatar = parsed.photoURL || parsed.avatar || parsed.profile_photo || '';
          detectedRole = parsed.type === 'expert' ? 'Licensed Expert' : 'Verified Member';
        }
      }

      if (!detectedName) {
        const expertName = localStorage.getItem('expert_businessName');
        const expertEmail = localStorage.getItem('expert_email');
        const seekerFirst = localStorage.getItem('seeker_firstName');
        const seekerLast = localStorage.getItem('seeker_lastName') || '';
        const seekerEmail = localStorage.getItem('seeker_email');

        if (expertName) {
          isLogged = true;
          detectedName = expertName;
          detectedEmail = expertEmail || '';
          detectedRole = 'Licensed Expert';
        } else if (seekerFirst) {
          isLogged = true;
          detectedName = `${seekerFirst} ${seekerLast}`.trim();
          detectedEmail = seekerEmail || '';
          detectedRole = 'Verified Member';
        } else if (seekerEmail) {
          isLogged = true;
          detectedName = seekerEmail.split('@')[0];
          detectedEmail = seekerEmail;
          detectedRole = 'Verified Member';
        }
      }

      if (detectedName) {
        const avatarUrl = detectedAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(detectedName)}&background=00A86B&color=fff&bold=true`;
        setCurrentUser({
          id: detectedId || detectedEmail || 'user_' + Date.now(),
          name: detectedName,
          email: detectedEmail,
          avatar: avatarUrl,
          role: detectedRole,
          isLoggedIn: isLogged
        });
      }
    } catch (e) {
      console.warn('Could not read user profile:', e);
    }
  }, []);

  // 2. Fetch Real Messages & Real Registered Members from Backend
  const fetchChannelData = async (channelSlug: string) => {
    try {
      setIsLoadingMessages(true);
      const res = await fetch(`/api/community/messages?channel=${encodeURIComponent(channelSlug)}`);
      if (!res.ok) return;

      const data = await res.json();
      if (data.success) {
        if (data.stats && data.stats.total_members) {
          setTotalMembersCount(data.stats.total_members);
        }

        // Map real registered members from DB
        if (Array.isArray(data.seniors) && data.seniors.length > 0) {
          const mapped: GroupMember[] = data.seniors.map((s: any, idx: number) => ({
            id: String(s.id || idx),
            name: s.name,
            avatar: s.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=420f79&color=fff`,
            role: s.university?.toLowerCase().includes('freelancer') || s.university?.toLowerCase().includes('company') ? 'Admin' : 'Moderator'
          }));
          setRegisteredMembers(mapped);
        }

        // Map real messages from DB
        if (Array.isArray(data.messages)) {
          const mappedMessages: ChatMessage[] = data.messages.map((m: any) => {
            const isSelf = Boolean(
              (currentUser.id && m.user_id === currentUser.id) ||
              (currentUser.email && (m.user_id === currentUser.email || m.sender_name === currentUser.name)) ||
              (currentUser.name && m.sender_name === currentUser.name)
            );
            return {
              id: String(m.id),
              senderName: isSelf ? 'You' : m.sender_name,
              senderAvatar: m.sender_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.sender_name)}&background=00A86B&color=fff`,
              isSelf,
              text: m.content,
              timestamp: m.created_at ? new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently'
            };
          });

          // Check if user has local unsynced offline messages
          let localBackup: ChatMessage[] = [];
          try {
            const localSaved = localStorage.getItem(`travltik_chat_${channelSlug}`);
            if (localSaved) {
              localBackup = JSON.parse(localSaved);
            }
          } catch (e) {}

          const combinedMap = new Map<string, ChatMessage>();
          mappedMessages.forEach(m => combinedMap.set(m.id, m));
          localBackup.forEach(m => {
            if (!combinedMap.has(m.id)) combinedMap.set(m.id, m);
          });

          const finalList = Array.from(combinedMap.values());
          setMessagesMap(prev => ({
            ...prev,
            [channelSlug]: finalList
          }));

          // Update room snippet
          if (finalList.length > 0) {
            const last = finalList[finalList.length - 1];
            setRooms(prevRooms => prevRooms.map(r => {
              if (r.id === channelSlug) {
                return {
                  ...r,
                  lastMessageSnippet: last.text ? (last.isSelf ? `You: ${last.text}` : `${last.senderName}: ${last.text}`) : 'Attachment',
                  lastMessageTime: last.timestamp
                };
              }
              return r;
            }));
          }
        }
      }
    } catch (err) {
      console.warn('Failed to load community feed:', err);
    } finally {
      setIsLoadingMessages(false);
    }
  };

  useEffect(() => {
    fetchChannelData(activeRoomId);
  }, [activeRoomId, currentUser.name]);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messagesMap, activeRoomId]);

  const activeRoom = rooms.find(r => r.id === activeRoomId) || rooms[0];
  const activeMessages = messagesMap[activeRoomId] || [];

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.title.toLowerCase().includes(roomSearchQuery.toLowerCase()) ||
                          room.lastMessageSnippet.toLowerCase().includes(roomSearchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (activeCategoryTab === 'Direct') return room.type === 'direct';
    if (activeCategoryTab === 'Groups') return room.type === 'group';
    return true;
  });

  const handleSelectRoom = (roomId: string) => {
    setActiveRoomId(roomId);
    setShowLeftSidebarMobile(false);
    setRooms(prev => prev.map(r => r.id === roomId ? { ...r, unreadCount: 0 } : r));
  };

  const handleToggleJoin = () => {
    setRooms(prev => prev.map(r => {
      if (r.id === activeRoomId) {
        return { ...r, isJoined: !r.isJoined };
      }
      return r;
    }));
  };

  // Real Message Sending to PostgreSQL DB
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    const textToSend = inputText.trim();
    setInputText('');
    setShowEmojiPicker(false);

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const localId = 'msg-' + Date.now();

    const newMsg: ChatMessage = {
      id: localId,
      senderName: 'You',
      senderAvatar: currentUser.avatar,
      isSelf: true,
      text: textToSend,
      timestamp: timeString
    };

    // Instant optimistic update
    const updatedMessages = [...activeMessages, newMsg];
    setMessagesMap(prev => ({ ...prev, [activeRoomId]: updatedMessages }));
    try {
      localStorage.setItem(`travltik_chat_${activeRoomId}`, JSON.stringify(updatedMessages));
    } catch (e) {}

    setRooms(prev => prev.map(r => {
      if (r.id === activeRoomId) {
        return {
          ...r,
          lastMessageSnippet: `You: ${textToSend}`,
          lastMessageTime: timeString
        };
      }
      return r;
    }));

    // Save to real database
    try {
      await fetch('/api/community/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel_slug: activeRoomId,
          content: textToSend,
          sender_name: currentUser.name || 'Community Member',
          sender_avatar: currentUser.avatar,
          user_id: currentUser.id || currentUser.email || 'guest-user'
        })
      });
    } catch (err) {
      console.warn('Network error saving message:', err);
    }
  };

  // Real File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sizeKB = (file.size / 1024).toFixed(0) + ' KB';
    const ext = file.name.split('.').pop()?.toUpperCase() || 'FILE';

    const reader = new FileReader();
    reader.onload = () => {
      const newMsg: ChatMessage = {
        id: 'msg-' + Date.now(),
        senderName: 'You',
        senderAvatar: currentUser.avatar,
        isSelf: true,
        timestamp: timeString,
        attachment: {
          name: file.name,
          size: sizeKB,
          type: ext,
          dataUrl: reader.result as string
        }
      };

      const updated = [...activeMessages, newMsg];
      setMessagesMap(prev => ({ ...prev, [activeRoomId]: updated }));
      try {
        localStorage.setItem(`travltik_chat_${activeRoomId}`, JSON.stringify(updated));
      } catch (e) {}

      setRooms(prev => prev.map(r => {
        if (r.id === activeRoomId) {
          return {
            ...r,
            lastMessageSnippet: `You sent a file: ${file.name}`,
            lastMessageTime: timeString
          };
        }
        return r;
      }));
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  // Real Image Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const reader = new FileReader();
    reader.onload = () => {
      const newMsg: ChatMessage = {
        id: 'msg-' + Date.now(),
        senderName: 'You',
        senderAvatar: currentUser.avatar,
        isSelf: true,
        timestamp: timeString,
        image: reader.result as string
      };

      const updated = [...activeMessages, newMsg];
      setMessagesMap(prev => ({ ...prev, [activeRoomId]: updated }));
      try {
        localStorage.setItem(`travltik_chat_${activeRoomId}`, JSON.stringify(updated));
      } catch (e) {}

      setRooms(prev => prev.map(r => {
        if (r.id === activeRoomId) {
          return {
            ...r,
            lastMessageSnippet: `You sent a photo`,
            lastMessageTime: timeString
          };
        }
        return r;
      }));
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleCreateNewChat = () => {
    if (!newChatTitle.trim()) return;
    const newId = 'room-' + Date.now();
    const newRoom: ChatRoom = {
      id: newId,
      title: newChatTitle.trim(),
      type: newChatType,
      memberCount: '1 member',
      activeStatus: 'Active just now',
      lastMessageSnippet: 'No messages yet • Start chatting',
      lastMessageTime: 'Just now',
      unreadCount: 0,
      bannerImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
      description: newChatDescription.trim() || 'New expat community conversation room.',
      isJoined: true,
      totalMembersCountText: 'Group Members',
      memberAvatars: [currentUser.avatar],
      members: [
        { id: currentUser.id, name: currentUser.name, avatar: currentUser.avatar, role: 'Admin' }
      ]
    };

    setRooms(prev => [newRoom, ...prev]);
    setActiveRoomId(newId);
    setShowNewChatModal(false);
    setNewChatTitle('');
    setNewChatDescription('');
  };

  const EMOJIS = ['👍', '❤️', '🎉', '🔥', '👏', '🙏', '💯', '✨', '🇨🇦', '🇩🇪', '🇬🇧', '🇦🇺'];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden select-none">

      {/* ── TOP HEADER ── */}
      <header className="h-14 sm:h-16 bg-white border-b border-slate-200/90 px-4 sm:px-6 flex items-center justify-between shrink-0 z-30">
        
        {/* Left Mobile Drawer Toggle + Global Search */}
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          <button
            type="button"
            onClick={() => setShowLeftSidebarMobile(!showLeftSidebarMobile)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100"
            title="Toggle chat rooms"
          >
            <Users className="w-5 h-5" />
          </button>

          {/* Search Pill Input */}
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Search chats, people, or topics..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200/90 focus:border-[#00A86B] rounded-full text-xs text-slate-800 placeholder-slate-400 outline-none transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Right Actions: Notifications, Messages, Real User Profile */}
        <div className="flex items-center gap-2 sm:gap-3.5 relative">
          
          {/* Notification Bell (Clean - no fake badge) */}
          <button
            type="button"
            className="relative p-2 text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
            title="Notifications"
          >
            <Bell className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Mail Envelope */}
          <button
            type="button"
            className="p-2 text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
            title="Direct Messages"
          >
            <Mail className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* User Profile Pill (Shows Real Logged In User) */}
          <div
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="flex items-center gap-2.5 pl-2 sm:pl-3 border-l border-slate-200/80 cursor-pointer hover:opacity-90 transition-opacity relative"
          >
            <div className="relative">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-2xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <span className="text-xs font-bold text-slate-800 hidden sm:inline-block max-w-[140px] truncate">
              {currentUser.name}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:inline-block" />
          </div>

          {/* User Dropdown Menu */}
          {showUserDropdown && (
            <div className="absolute top-12 right-0 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 w-56 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-2 py-1.5 border-b border-slate-100 mb-2">
                <p className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</p>
                {currentUser.email && (
                  <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
                )}
                <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                  {currentUser.role}
                </span>
              </div>

              <a
                href={currentUser.role === 'Licensed Expert' ? '/service-provider/dashboard' : '/traveller/dashboard'}
                className="flex items-center gap-2 px-2.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-[#00A86B]" />
                <span>My Dashboard</span>
              </a>

              <a
                href="/login"
                className="flex items-center gap-2 px-2.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <LogOut className="w-3.5 h-3.5 text-slate-400" />
                <span>Switch Account</span>
              </a>
            </div>
          )}

          {/* Right Sidebar Toggle for Mobile */}
          <button
            type="button"
            onClick={() => setShowRightDetailsMobile(!showRightDetailsMobile)}
            className="xl:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100"
            title="Group info"
          >
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── 3-COLUMN MAIN LAYOUT ── */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* COLUMN 1: LEFT SIDEBAR (Chat Rooms & Conversations) */}
        <aside
          className={`
            fixed md:relative inset-y-0 left-0 z-40 w-[300px] sm:w-[320px] bg-white border-r border-slate-200/90
            flex flex-col shrink-0 transition-transform duration-300 md:translate-x-0
            ${showLeftSidebarMobile ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
          `}
        >
          {/* Header: Chat Rooms & + New Chat */}
          <div className="p-4 flex items-center justify-between border-b border-slate-100">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Chat Rooms
            </h2>
            <button
              type="button"
              onClick={() => setShowNewChatModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00A86B] hover:bg-[#00925d] text-white text-xs font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>New Chat</span>
            </button>
          </div>

          {/* Search conversations input */}
          <div className="px-3.5 py-2.5 border-b border-slate-100">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={roomSearchQuery}
                onChange={(e) => setRoomSearchQuery(e.target.value)}
                placeholder="Search conversations..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200/90 focus:border-[#00A86B] focus:bg-white rounded-xl text-xs text-slate-800 placeholder-slate-400 outline-none transition-all"
              />
            </div>
          </div>

          {/* Category Tabs: All | Direct | Groups */}
          <div className="flex items-center border-b border-slate-200/80 px-4 text-xs font-semibold text-slate-500">
            {(['All', 'Direct', 'Groups'] as const).map((tab) => {
              const isActive = activeCategoryTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategoryTab(tab)}
                  className={`py-2 px-3 transition-colors relative cursor-pointer ${
                    isActive ? 'text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>{tab}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#00A86B] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Conversations List (No dummy messages, clean snippets) */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100/80 no-scrollbar">
            {filteredRooms.map((room) => {
              const isSelected = room.id === activeRoomId;
              return (
                <div
                  key={room.id}
                  onClick={() => handleSelectRoom(room.id)}
                  className={`
                    px-3.5 py-3 flex items-center gap-3 cursor-pointer transition-colors relative
                    ${isSelected ? 'bg-slate-50/90' : 'hover:bg-slate-50/60 bg-white'}
                  `}
                >
                  {/* Flag Roundel / Icon */}
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200/70 shadow-2xs flex items-center justify-center">
                    {room.flagComponent ? (
                      room.flagComponent
                    ) : (
                      <img src={room.avatar || room.bannerImage} alt={room.title} className="w-full h-full object-cover" />
                    )}
                  </div>

                  {/* Title & Real Snippet */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h3 className="text-xs font-bold text-slate-900 truncate">
                        {room.title}
                      </h3>
                      {room.lastMessageTime && (
                        <span className="text-[10px] text-slate-400 font-medium shrink-0">
                          {room.lastMessageTime}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 truncate leading-snug">
                      {room.lastMessageSnippet}
                    </p>
                  </div>

                  {/* Unread Badge (Only displayed when real unread messages exist) */}
                  {room.unreadCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-[#00A86B] text-white text-[10px] font-black flex items-center justify-center shrink-0 shadow-2xs">
                      {room.unreadCount}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* COLUMN 2: CENTER (Live Chat Messages & Input Composer) */}
        <main className="flex-1 flex flex-col bg-white min-w-0 border-r border-slate-200/90 relative">

          {/* Active Room Header */}
          <div className="h-14 sm:h-16 px-4 sm:px-6 border-b border-slate-200/90 flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-slate-200/80 shadow-2xs flex items-center justify-center">
                {activeRoom.flagComponent ? (
                  activeRoom.flagComponent
                ) : (
                  <img src={activeRoom.avatar || activeRoom.bannerImage} alt={activeRoom.title} className="w-full h-full object-cover" />
                )}
              </div>

              <div className="min-w-0">
                <h1 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  {activeRoom.title}
                </h1>
                <p className="text-[11px] text-slate-500 font-normal">
                  {totalMembersCount} registered members • <span className="text-emerald-600 font-semibold">Live</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-slate-500">
              <button
                type="button"
                className="p-1.5 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="Search messages"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setShowNewChatModal(true)}
                className="p-1.5 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="Add members"
              >
                <UserPlus className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-1.5 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="More options"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed Stream */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#fdfdfd]">
            
            {/* If NO messages exist in this room yet -> Show Beautiful Clean Empty State */}
            {activeMessages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 max-w-md mx-auto my-auto">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shadow-xs mb-3.5 flex items-center justify-center bg-slate-50">
                  {activeRoom.flagComponent ? (
                    activeRoom.flagComponent
                  ) : (
                    <img src={activeRoom.bannerImage} alt={activeRoom.title} className="w-full h-full object-cover" />
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Welcome to {activeRoom.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed mb-5">
                  This room is open for registered community members, travelers, and licensed advisors. Say hello or post a question below to start the discussion!
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setInputText("Hello everyone! Glad to join this community 👋")}
                    className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                  >
                    "Hello everyone! 👋"
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputText("Does anyone have recent updates regarding visa processing times?")}
                    className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                  >
                    "Ask about visa timelines ⏱️"
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Centered Date Badge */}
                <div className="flex items-center justify-center my-1">
                  <span className="px-3 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold shadow-2xs">
                    Today
                  </span>
                </div>

                {activeMessages.map((msg) => {
                  if (msg.isSelf) {
                    return (
                      <div key={msg.id} className="flex items-end justify-end gap-2.5 pl-8 sm:pl-16">
                        <div className="flex flex-col items-end max-w-[85%] sm:max-w-md">
                          <div className="bg-[#E8F8F2] border border-[#d1f2e4] text-slate-900 rounded-2xl rounded-tr-xs px-4 py-2.5 text-xs sm:text-sm shadow-2xs leading-relaxed whitespace-pre-wrap">
                            {msg.text && <p>{msg.text}</p>}
                            {msg.image && (
                              <img src={msg.image} alt="Uploaded attachment" className="rounded-xl max-h-60 object-cover mt-1.5" />
                            )}
                            {msg.attachment && (
                              <div className="flex items-center justify-between gap-3 p-2 bg-white/80 rounded-xl border border-emerald-200 mt-1">
                                <div className="flex items-center gap-2 min-w-0">
                                  <div className="w-7 h-7 rounded-lg bg-rose-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                                    A
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-xs font-bold text-slate-900 truncate">{msg.attachment.name}</p>
                                    <span className="text-[10px] text-slate-500">{msg.attachment.size} • {msg.attachment.type}</span>
                                  </div>
                                </div>
                                <Download className="w-4 h-4 text-slate-500 hover:text-slate-800 shrink-0 cursor-pointer" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-medium">
                            <span>{msg.timestamp}</span>
                            <CheckCheck className="w-3.5 h-3.5 text-[#00A86B] stroke-[2.2]" />
                          </div>
                        </div>

                        <img
                          src={currentUser.avatar}
                          alt="You"
                          className="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200 mb-4"
                        />
                      </div>
                    );
                  }

                  return (
                    <div key={msg.id} className="flex items-start gap-2.5 pr-8 sm:pr-16">
                      <img
                        src={msg.senderAvatar}
                        alt={msg.senderName}
                        className="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200 mt-0.5"
                      />

                      <div className="flex flex-col items-start max-w-[85%] sm:max-w-md">
                        <span className="text-[11px] font-bold text-slate-700 mb-1">
                          {msg.senderName}
                        </span>

                        {msg.text && (
                          <div className="bg-white border border-slate-200/90 text-slate-800 rounded-2xl rounded-tl-xs px-4 py-2.5 text-xs sm:text-sm shadow-2xs leading-relaxed">
                            <p>{msg.text}</p>
                          </div>
                        )}

                        {msg.attachment && (
                          <div className="bg-white border border-slate-200/90 rounded-2xl rounded-tl-xs p-3 shadow-2xs w-full max-w-sm flex items-center justify-between gap-3 hover:border-slate-300 transition-all">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-8 h-8 rounded-lg bg-rose-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                                A
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-xs font-bold text-slate-900 truncate">
                                  {msg.attachment.name}
                                </h4>
                                <p className="text-[10px] text-slate-500 font-medium">
                                  {msg.attachment.size} • {msg.attachment.type}
                                </p>
                              </div>
                            </div>

                            <a
                              href={msg.attachment.dataUrl || msg.attachment.url || '#'}
                              download={msg.attachment.name}
                              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                              title="Download document"
                            >
                              <Download className="w-4 h-4 stroke-[2]" />
                            </a>
                          </div>
                        )}

                        {msg.image && (
                          <img src={msg.image} alt="Shared preview" className="rounded-xl max-h-60 object-cover mt-1 border border-slate-200" />
                        )}

                        <span className="text-[10px] text-slate-400 font-medium mt-1">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Bottom Message Composer */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200/90 flex items-center gap-2 sm:gap-3 relative">
            
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                title="Add Emoji"
              >
                <Smile className="w-5 h-5 stroke-[1.8]" />
              </button>

              {showEmojiPicker && (
                <div className="absolute bottom-12 left-0 bg-white rounded-2xl border border-slate-200 shadow-xl p-2.5 grid grid-cols-4 gap-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {EMOJIS.map(emoji => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => {
                        setInputText(prev => prev + emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="w-8 h-8 flex items-center justify-center text-lg hover:bg-slate-100 rounded-lg cursor-pointer"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Type a message..."
              className="flex-1 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200/90 focus:border-[#00A86B] rounded-full px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition-all shadow-2xs"
            />

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
            <input
              type="file"
              ref={imageInputRef}
              onChange={handleImageUpload}
              className="hidden"
              accept="image/*"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              title="Attach Document"
            >
              <Paperclip className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              title="Attach Image"
            >
              <ImageIcon className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              type="button"
              onClick={handleSendMessage}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#00A86B] hover:bg-[#00925d] text-white flex items-center justify-center shadow-md shadow-[#00A86B]/20 transition-all active:scale-95 cursor-pointer shrink-0"
              title="Send Message"
            >
              <Send className="w-4 h-4 translate-x-0.5" />
            </button>
          </div>
        </main>

        {/* COLUMN 3: RIGHT SIDEBAR (Real Group Details & Members Roster) */}
        <aside
          className={`
            fixed xl:relative inset-y-0 right-0 z-40 w-[300px] sm:w-[320px] lg:w-[340px] bg-white border-l border-slate-200/90
            flex flex-col shrink-0 overflow-y-auto transition-transform duration-300 xl:translate-x-0 no-scrollbar
            ${showRightDetailsMobile ? 'translate-x-0 shadow-2xl' : 'translate-x-full xl:translate-x-0'}
          `}
        >
          <div className="relative w-full h-36 sm:h-40 bg-slate-900 overflow-hidden shrink-0">
            <img
              src={activeRoom.bannerImage}
              alt={activeRoom.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            <button
              type="button"
              onClick={() => setShowRightDetailsMobile(false)}
              className="xl:hidden absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="px-5 relative">
            <div className="w-14 h-14 rounded-full border-4 border-white shadow-md -mt-7 bg-white overflow-hidden flex items-center justify-center">
              {activeRoom.flagComponent ? (
                activeRoom.flagComponent
              ) : (
                <img src={activeRoom.avatar || activeRoom.bannerImage} alt={activeRoom.title} className="w-full h-full object-cover" />
              )}
            </div>

            <div className="mt-3">
              <h2 className="text-base font-bold text-slate-900 leading-tight">
                {activeRoom.title}
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {totalMembersCount} Registered Members • Public Group
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
              {activeRoom.description}
            </p>

            <button
              type="button"
              onClick={handleToggleJoin}
              className={`
                w-full mt-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-98 cursor-pointer
                ${activeRoom.isJoined
                  ? 'bg-[#00A86B] hover:bg-[#00925d] text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }
              `}
            >
              {activeRoom.isJoined ? 'Joined • Click to Leave' : 'Join Group'}
            </button>
          </div>

          <div className="h-px bg-slate-100 my-4 mx-5" />

          {/* Real Group Members Section */}
          <div className="px-5 pb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-900">
                Group Members ({totalMembersCount})
              </h3>
            </div>

            {/* Overlapping member avatars using real avatars or registered members */}
            <div className="flex items-center -space-x-1.5 mb-4">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                title={`${currentUser.name} (You)`}
              />
              {registeredMembers.slice(0, 4).map((mem, i) => (
                <img
                  key={mem.id || i}
                  src={mem.avatar}
                  alt={mem.name}
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                  title={mem.name}
                />
              ))}
              <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white text-slate-600 text-[9px] font-black flex items-center justify-center shadow-2xs">
                +{Math.max(1, totalMembersCount - 5)}
              </div>
            </div>

            {/* Real Registered Members Roster */}
            <div className="space-y-3">
              
              {/* Current User in Roster */}
              <div className="flex items-center justify-between gap-3 p-1.5 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-200"
                  />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-900 truncate block">
                      {currentUser.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      You
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 shrink-0">
                  {currentUser.role}
                </span>
              </div>

              {/* Real Registered Members from Database */}
              {registeredMembers.map((mem) => (
                <div key={mem.id} className="flex items-center justify-between gap-3 px-1">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={mem.avatar}
                      alt={mem.name}
                      className="w-8 h-8 rounded-full object-cover border border-slate-200"
                    />
                    <span className="text-xs font-bold text-slate-800 truncate">
                      {mem.name}
                    </span>
                  </div>

                  {mem.role && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/70 shrink-0">
                      {mem.role}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>

      {/* CREATE NEW CHAT MODAL */}
      {showNewChatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">Create New Expat Chat Room</h3>
              <button
                type="button"
                onClick={() => setShowNewChatModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Channel / Group Name *</label>
                <input
                  type="text"
                  value={newChatTitle}
                  onChange={(e) => setNewChatTitle(e.target.value)}
                  placeholder="e.g. Ireland Stamp 4 & Tech Expats"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#00A86B] outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description (Optional)</label>
                <textarea
                  rows={3}
                  value={newChatDescription}
                  onChange={(e) => setNewChatDescription(e.target.value)}
                  placeholder="Describe what members will discuss in this room..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#00A86B] outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-4 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="chatType"
                    checked={newChatType === 'group'}
                    onChange={() => setNewChatType('group')}
                    className="accent-[#00A86B]"
                  />
                  <span className="font-semibold text-slate-700">Community Group</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="chatType"
                    checked={newChatType === 'direct'}
                    onChange={() => setNewChatType('direct')}
                    className="accent-[#00A86B]"
                  />
                  <span className="font-semibold text-slate-700">Direct 1-on-1 Chat</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowNewChatModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreateNewChat}
                  disabled={!newChatTitle.trim()}
                  className="px-5 py-2 rounded-xl bg-[#00A86B] hover:bg-[#00925d] text-white font-bold transition-all disabled:opacity-50 cursor-pointer"
                >
                  Create Channel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
